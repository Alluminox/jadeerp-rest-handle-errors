const  CustomError = require("../errors/custom-error");

module.exports = (error, req, res, next) => {
    let status = 400;
    let errors = [{ 
        message: 
        "Internal Server Error"
    }] 
    
    if (process.env.NODE_ENV === 'dev') 
        errors[0].stack = error.stack;

    if (error instanceof CustomError)  {
        status = error.statusCode;
        errors = error.serializeErrors()
    }

    res.status(status).json({ errors })
}