class CustomError extends Error {
    constructor(message) {
        super(message ? message : undefined);   
        Object.setPrototypeOf(this, CustomError.prototype)
    }

    serializeErrors() {
        throw new Error("Implement this method into subclass");
    }
}

module.exports = CustomError;