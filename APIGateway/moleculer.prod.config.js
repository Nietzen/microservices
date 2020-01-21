"use strict";

const {
          LOGGER: logger,
          LOGLEVEL: logLevel,
          TRANSPORTER: transporter,
          REQUEST_TIMEOUT: requestTimeout,
          NAMESPACE: namespace,
          METRICS: metrics,
          CIRCUIT_BREAKER_ENABLED: circuitEnabled
      } = process.env;

module.exports = {
    circuitBreaker: {
        enabled: circuitEnabled
    },
    logger,
    logLevel,
    metrics,
    namespace,
    requestTimeout,
    transporter
};