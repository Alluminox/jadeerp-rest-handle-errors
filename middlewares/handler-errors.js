const CustomError = require("../errors/custom-error");

module.exports = (error, req, res, next) => {
  const errors = error instanceof CustomError 
    ? error.serializeErrors() 
    : [ { message: error.message } ] 
  
  if (process.env.NODE_ENV === 'dev') {
    errors[0].stack = error.stack;
  }

  res.status(error.statusCode || 400).json({ errors });
}