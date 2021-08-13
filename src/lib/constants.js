const PERF_OBSERVER_SUPPORTED = 'PerformanceObserver' in window;

export const SENDBEACON_SUPPORTED = 'sendBeacon' in navigator;
export const FCP_SUPPORTED = PERF_OBSERVER_SUPPORTED && PerformanceObserver.supportedEntryTypes.includes('paint');
export const TTFB_SUPPORTED = PERF_OBSERVER_SUPPORTED && PerformanceObserver.supportedEntryTypes.includes('navigation');
