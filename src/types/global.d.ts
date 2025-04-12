interface Window {
  requestIdleCallback: (
    callback: (deadline: {
      didTimeout: boolean;
      timeRemaining: () => number;
    }) => void,
    options?: { timeout: number }
  ) => number;
  cancelIdleCallback: (handle: number) => void;
  
  // Add Cookiebot types
  Cookiebot?: {
    consent: {
      necessary: boolean;
      preferences: boolean;
      statistics: boolean;
      marketing: boolean;
    };
    consented: boolean;
    declined: boolean;
    show: () => void;
  };
}
