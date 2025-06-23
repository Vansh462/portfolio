import { useEffect, useRef, useState } from 'react';

interface IntersectionObserverOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  options: IntersectionObserverOptions = {}
) {
  const { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false } = options;
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [node, setNode] = useState<Element | null>(null);

  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
        if (freezeOnceVisible && entry.isIntersecting) {
          observer.current?.disconnect();
        }
      },
      { threshold, root, rootMargin }
    );

    if (node) {
      observer.current.observe(node);
    }

    return () => {
      observer.current?.disconnect();
    };
  }, [node, threshold, root, rootMargin, freezeOnceVisible]);

  return [setNode, entry] as const;
}
