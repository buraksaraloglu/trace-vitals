// Vendors
import {
  getFCP, getTTFB,
} from 'web-vitals';

import {
  FCP_SUPPORTED, TTFB_SUPPORTED, SENDBEACON_SUPPORTED,
} from './constants';
import createMetric from './createMetrics';
import reportMetrics from './reportMetrics';

export const traceVitals = (endpoint) => {
  if (SENDBEACON_SUPPORTED) {
    let sent = false;
    const vitals = [];

    const maxMetrics = [FCP_SUPPORTED, TTFB_SUPPORTED].filter((supported) => supported).length;

    const sendCallback = () => {
      if (!sent) {
        reportMetrics(vitals, endpoint);
        sent = true;
      }
    };

    const pushMetric = ({ name, value }) => {
      vitals.push(createMetric(name, value));

      if (vitals.length === maxMetrics) {
        sendCallback();
      }
    };

    if (FCP_SUPPORTED) {
      getFCP(pushMetric);
    }

    if (TTFB_SUPPORTED) {
      getTTFB(pushMetric);
    }
  }
};
