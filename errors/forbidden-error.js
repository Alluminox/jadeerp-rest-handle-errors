const CustomError = require("./custom-error");

class ForbiddenError extends CustomError {
  statusCode = 403
    constructor(message) {
        super(message);
        Object.setPrototypeOf(this, ForbiddenError.prototype)
    }

    serializeErrors() {
        return [ {
            message: this.message || 'Resource is not found'
        }]
    }
}

module.exports = ForbiddenError