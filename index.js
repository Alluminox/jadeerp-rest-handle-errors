module.exports = {
    CustomError: require('./errors/custom-error'),
    BadRequestError: require('./errors/bad-request-error'),
    NotFoundError: require('./errors/not-found-error'),
    RequestValidationError: require('./errors/request-validation-error'),
    ForbiddenError: require('./errors/forbidden-error'),
    UnauthorizedError: require('./errors/unauthorized-error'),
    
    middlewares: { 
      handleError: require('./middlewares/handler-errors')
    },

    helpers: {
        catchAsync: require('./helpers/catch-async')   
    }
}