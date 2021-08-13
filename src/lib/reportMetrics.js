const reportMetrics = (vitals, endpoint) => {
  const beaconCallback = () => {
    const payload = {
      pathName: document.location.pathname,
      metrics: vitals,
    };

    navigator.sendBeacon(endpoint, JSON.stringify(payload));
  };

  beaconCallback();
};

export default reportMetrics;
