const {Service} = require('moleculer');

class BaseService extends Service {

    /**
     * Constructor of the Service
     *
     * @param broker
     * @param schema
     */
    constructor(broker, schema) {
        super(broker, schema);

        this.parseServiceSchema({
                                    actions: this.getActions(),
                                    created: this.serviceCreated,
                                    dependencies: this.getDependencies(),
                                    events: this.getEventsListener(),
                                    meta: this.getMeta(),
                                    mixins: this.getMixins(),
                                    name: this.getName(),
                                    settings: this.getSettings(),
                                    started: this.serviceStarted,
                                    stopped: this.serviceStopped,
                                    version: this.getVersion(),
                                });
    }

    /**
     * Get Actions for the service
     * The actions are the callable/public methods of the service. They are callable with broker.call
     *
     * @return {{}}
     */
    getActions() {
        return {};
    }

    /**
     * Get Dependencies for the service
     *
     * @return {*[]}
     */
    getDependencies() {
        return [];
    }

    /**
     * Get Events listener for the service
     *
     * @return {{}}
     */
    getEventsListener() {
        return {};
    }

    /**
     * Get Meta for the service
     *
     * @return {{}}
     */
    getMeta() {
        return {};
    }

    /**
     * Get Mixins for the service
     *
     * @return [*]
     */
    getMixins() {
        return [];
    }

    /**
     * Name of the service
     *
     * @return {string}
     */
    getName() {
        return "";
    }

    /**
     * Version service
     *
     * @return {number}
     */
    getVersion() {
        return 1;
    }

    /**
     * The settings property is a store, where you can store every settings/options to your service.
     * You can reach it via this.settings inside the service.
     *
     * @return {{}}
     */
    getSettings() {
        return {};
    }

    /**
     * CallBack when the service was created
     */
    serviceCreated() {
        this.logger.info(`${this.constructor.name} Service created.`);
    }

    /**
     * CallBack when the service was started
     */
    serviceStarted() {
        this.logger.info(`${this.constructor.name} Service started.`);
    }

    /**
     * CallBack when the service was stopped
     */
    serviceStopped() {
        this.logger.info(`${this.constructor.name} Service stopped.`);
    }
}

module.exports = BaseService;
