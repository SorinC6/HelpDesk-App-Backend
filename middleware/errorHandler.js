const responseStatus = require("../config/responseStatuses");

function errorHandler(error, req, res, next) {
  switch (error) {
    case responseStatus.badRequest:
      res.status(responseStatus.badRequest).json({
        statusCode: error,
        message: "Required fields cannot be blank."
      });
      break;
    case responseStatus.notFound:
      res
        .status(responseStatus.notFound)
        .json({ statusCode: error, message: "This page does not exist." });
      break;
    case responseStatus.serverError:
      res.status(responseStatus.serverError).json({
        statusCode: error,
        message: `The request could not be completed. Please try again.`
      });

      break;
    case responseStatus.badCredentials:
      res.status(responseStatus.badCredentials).json({
        statusCode: error,
        message: "Incorrect credentials. Please try again."
      });
    case responseStatus.forbiddenAccess:
      res.status(responseStatus.forbiddenAccess).json({
        statusCode: error,
        message: "You are not authorized to view this content."
      });
    default:
      res.json({ message: error.message });
  }
  next();
}

module.exports = errorHandler;
