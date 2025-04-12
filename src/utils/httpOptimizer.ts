/**
 * HTTP Request Optimization Utilities
 * 
 * This file provides utilities for optimizing HTTP requests, including
 * request batching, caching, and prefetching.
 */

// Cache for storing responses
const responseCache = new Map<string, {
  data: any;
  timestamp: number;
  expiresAt: number;
}>();

// Default cache TTL in milliseconds (5 minutes)
const DEFAULT_CACHE_TTL = 5 * 60 * 1000;

/**
 * Fetch with caching
 * @param url - URL to fetch
 * @param options - Fetch options
 * @param cacheTTL - Cache time-to-live in milliseconds
 * @returns Promise with the response data
 */
export async function fetchWithCache<T>(
  url: string,
  options?: RequestInit,
  cacheTTL: number = DEFAULT_CACHE_TTL
): Promise<T> {
  const cacheKey = `${url}-${JSON.stringify(options)}`;
  const now = Date.now();
  
  // Check if we have a valid cached response
  const cachedResponse = responseCache.get(cacheKey);
  if (cachedResponse && cachedResponse.expiresAt > now) {
    return cachedResponse.data as T;
  }
  
  // If not cached or expired, make the request
  const response = await fetch(url, options);
  
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  
  const data = await response.json();
  
  // Cache the response
  responseCache.set(cacheKey, {
    data,
    timestamp: now,
    expiresAt: now + cacheTTL
  });
  
  return data as T;
}

// Batch request queue
interface BatchRequest {
  url: string;
  options?: RequestInit;
  resolve: (value: any) => void;
  reject: (reason: any) => void;
}

let batchQueue: BatchRequest[] = [];
let batchTimeout: NodeJS.Timeout | null = null;
const BATCH_DELAY = 50; // ms to wait before processing batch

/**
 * Fetch with request batching
 * @param url - URL to fetch
 * @param options - Fetch options
 * @returns Promise with the response data
 */
export function fetchWithBatching<T>(url: string, options?: RequestInit): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    // Add request to queue
    batchQueue.push({ url, options, resolve, reject });
    
    // Set timeout to process batch if not already set
    if (!batchTimeout) {
      batchTimeout = setTimeout(processBatch, BATCH_DELAY);
    }
  });
}

/**
 * Process the batch of requests
 */
async function processBatch() {
  const requests = [...batchQueue];
  batchQueue = [];
  batchTimeout = null;
  
  // Group requests by URL
  const requestsByUrl = requests.reduce((acc, request) => {
    const key = request.url;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(request);
    return acc;
  }, {} as Record<string, BatchRequest[]>);
  
  // Process each group of requests
  for (const [url, requestGroup] of Object.entries(requestsByUrl)) {
    try {
      const response = await fetch(url, requestGroup[0].options);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      
      // Resolve all requests for this URL
      requestGroup.forEach(request => request.resolve(data));
    } catch (error) {
      // Reject all requests for this URL
      requestGroup.forEach(request => request.reject(error));
    }
  }
}

/**
 * Prefetch a URL and cache the response
 * @param url - URL to prefetch
 * @param options - Fetch options
 * @param cacheTTL - Cache time-to-live in milliseconds
 */
export function prefetch(
  url: string,
  options?: RequestInit,
  cacheTTL: number = DEFAULT_CACHE_TTL
): void {
  // Use requestIdleCallback if available, otherwise use setTimeout
  const scheduleTask = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
  
  scheduleTask(() => {
    fetchWithCache(url, options, cacheTTL)
      .catch(error => console.error(`Prefetch error for ${url}:`, error));
  });
}

/**
 * Clear the response cache
 * @param url - Optional URL to clear from cache (clears all if not provided)
 */
export function clearCache(url?: string): void {
  if (url) {
    // Clear specific URL from cache
    for (const key of responseCache.keys()) {
      if (key.startsWith(url)) {
        responseCache.delete(key);
      }
    }
  } else {
    // Clear entire cache
    responseCache.clear();
  }
}
