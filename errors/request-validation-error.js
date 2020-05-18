const CustomError = require("./custom-error")

class RequestValidationError extends CustomError {
    statusCode = 400
    constructor(errors) {
        super();

        this._errors = errors;

        Object.setPrototypeOf(this, RequestValidationError.prototype)
    }

    serializeErrors() {
        return this._errors.map(err => ({ message: err.msg, fielf: err.param }))
    }
}

module.exports = RequestValidationError