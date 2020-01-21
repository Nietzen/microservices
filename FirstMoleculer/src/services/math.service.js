const BaseService = require('./base/BaseService');

/**
 * Service for do arithmetic operations
 */
class MathService extends BaseService {
    getName() {
        return 'math';
    }

    getActions() {
        return {
            add: {
                handler: this.addAction,
                params: {
                    a: "number",
                    b: "number",
                },
            },
            div: {
                handler: this.divAction,
                params: {
                    a: "number",
                    b: "number",
                },
            },
            mul: {
                handler: this.mulAction,
                params: {
                    a: "number",
                    b: "number",
                },
            },
            sub: {
                handler: this.subAction,
                params: {
                    a: "number",
                    b: "number",
                },
            },
        };
    }

    /**
     * Addition
     *
     * @param ctx
     * @param ctx.params.a
     * @param ctx.params.b
     * @return {{result: number}}
     */
    addAction(ctx) {
        const {a, b} = ctx.params;

        return {
            result: a + b,
        };
    }

    /**
     * Subtraction
     *
     * @param ctx
     * @param ctx.params.a
     * @param ctx.params.b
     * @return {{result: number}}
     */
    subAction(ctx) {
        const {a, b} = ctx.params;

        return {
            result: a - b,
        };
    }

    /**
     * Multiplication
     *
     * @param ctx
     * @param ctx.params.a
     * @param ctx.params.b
     * @return {{result: number}}
     */
    mulAction(ctx) {
        const {a, b} = ctx.params;

        this.logger.info("Call Math Mul");

        return {
            result: a * b,
        };
    }

    /**
     * Division
     *
     * @param ctx
     * @param ctx.params.a
     * @param ctx.params.b
     * @return {{result: number}}
     */
    divAction(ctx) {
        const {a, b} = ctx.params;

        return {
            result: a / b,
        };
    }
}

module.exports = MathService;