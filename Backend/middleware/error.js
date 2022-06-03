const ErrorHander = require("../utils/errorHander");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  /* ----------------------------- Wrong Id Error start----------------------------- */
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid : ${err.path}`;
    err = new ErrorHander(message, 400);
  }

  /* ---------------------- Mongoose duplicate key error ---------------------- */
  if (err.code === 11000) {
    const message = `Duplicate ${object.keys(err.keyValue)} Entered`;
    err = new ErrorHander(message, 400);
  }

  /* ----------------------------- Wrong JWT error----------------------------- */
  if (err.name === "JsonWebTokenError") {
    const message = `Json Web Token is invalid,Try again`;
    err = new ErrorHander(message, 400);
  }

  /* ----------------------------- JWT Expire error----------------------------- */
  if (err.name === "TokenExpiredError") {
    const message = `Json Web Token is Expire ,Try again`;
    err = new ErrorHander(message, 400);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
