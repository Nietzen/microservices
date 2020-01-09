const ApiGatewayServiceMixin = require('moleculer-web');
const BaseService = require('./base/BaseService');

/**
 * Service for do arithmetic operations
 */
class ApiGatewayService extends BaseService {
    getName() {
        return 'api.gateway';
    }

    getSettings() {
        return {
            port: process.env.MIDDLEWARE_WEB_PORT || 3000,
            routes: [{
                // Use bodyparser modules
                bodyParsers: {
                    json: true,
                    urlencoded: {extended: true}
                },
                path: "/api",
                aliases: {
                    "GET weather/city/:city": "v1.weather.city",
                },
                // Route error handler
                onError(req, res, err) {
                    res.setHeader("Content-Type", "application/json; charset=utf-8");
                    res.writeHead(500);
                    res.end(JSON.stringify(err));
                }
            }],
            // Global error handler
            onError(req, res, err) {
                res.setHeader("Content-Type", "text/plain");
                res.writeHead(500);
                res.end("Global error: " + err.message);
            },
        };
    }

    getMixins() {
        return [
            ApiGatewayServiceMixin,
        ];
    }

    /**
     * Get Dependencies for the service
     *
     * @return {*[]}
     */
    getDependencies() {
        return [
            "v1.weather"
        ];
    }
}

module.exports = ApiGatewayService;