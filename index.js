module.exports = {
    errors: {
        'CustomError': require('./errors/custom-error'),
        'BadRequestError': require('./errors/bad-request-error'),
        'NotFoundError': require('./errors/not-found-error'),
        'RequestValidationError': require('./errors/request-validation-error')
    },

    middlewares: {
        handleError: require('./middlewares/handler-errors')
    }
}