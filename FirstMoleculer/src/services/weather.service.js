const BaseService = require('./base/BaseService');
const axios = require('axios');

/**
 * Service for get Weather from city
 */
class WeatherService extends BaseService {
    getName() {
        return 'weather';
    }

    constructor(broker, schema) {
        super(broker, schema);

        this.appId = process.env.API_OPEN_WEATHER_MAP_API_KEY;
    }

    getActions() {
        return {
            city: {
                handler: this.findByCityAction,
                params: {
                    city: "string",
                },
            }
        };
    }

    /**
     * Call Api Open Weather
     *
     * @param city
     */
    callOpenWeatherAPI(city) {
        return new Promise((resolve, reject) => {
            axios.get('https://api.openweathermap.org/data/2.5/weather', {
                params: {
                    appid: this.appId,
                    units: 'metric', // Celsius
                    q: city,
                }
            })
                 .then(response => resolve(this.handleResponseOpenWeatherAPI(response)))
                 .catch(() => resolve({data: "City not found"}))
        });
    }

    /**
     * From Celsius to Fahrenheit: F = C * 9/5 + 32
     *
     * @param response
     * @return {Promise<{tempFahrenheit: *, tempCelsius: *}>}
     */
    async handleResponseOpenWeatherAPI(response) {
        const {main: {temp: tempCelsius}} = response.data,
              tempFahrenheit              = Number(((await this.broker.call('v1.math.mul', {
                  a: tempCelsius,
                  b: 9 / 5
              })).result + 32).toFixed(2));

        return {
            tempCelsius,
            tempFahrenheit,
        };
    }

    findByCityAction(ctx) {
        const {city} = ctx.params;

        return this.callOpenWeatherAPI(city);
    }

}

module.exports = WeatherService;