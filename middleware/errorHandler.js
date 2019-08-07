// //https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

// const resStatus = require("../config/responseStatuses");

// function errorHandler(error, req, res, next) {
//   switch (error) {
//     case resStatus.created: //201
//       res.status(resStatus.created).json({
//         statusCode: error,
//         message:
//           "The request has succeeded and a new resource has been created as a result of it"
//       });
//       break;
//     case resStatus.badRequest: // 400
//       res.status(resStatus.badRequest).json({
//         statusCode: error,
//         error:
//           "That server could not understand the request due to invalid syntax"
//       });
//       break;
//     case resStatus.badCredentials: //401
//       res.status(resStatus.badCredentials).json({
//         statusCode: error,
//         error: "Incorrect credentials. Please try again."
//       });
//       break;
//     case resStatus.forbiddenAccess: //403
//       res.status(resStatus.forbiddenAccess).json({
//         statusCode: error,
//         error: "You are not authorized to view this content."
//       });
//       break;
//     case resStatus.notFound: //404
//       res.status(resStatus.notFound).json({
//         statusCode: error,
//         error: "The server can not find requested resource"
//       });
//       break;
//     case resStatus.requestTimeout: //408
//       res.status(resStatus.requestTimeout).json({
//         statusCode: error,
//         error: "The server would like to shut down this unused connection"
//       });
//       break;
//     case resStatus.gone: //410
//       res.status(resStatus.gone).json({
//         statusCode: error,
//         error:
//           "the requested content has been permanently deleted from server, with no forwarding address"
//       });
//       break;
//     case resStatus.typeError: //422
//       res.status(resStatus.typeError).json({
//         statusCode: error,
//         error:
//           "The request was well-formed but was unable to be followed due to semantic errors."
//       });
//       break;

//     case resStatus.serverError: //500
//       res.status(resStatus.serverError).json({
//         statusCode: error,
//         error: `The server has encountered a situation it doesn't know how to handle`
//       });
//       break;
//     case resStatus.badGateway: //502
//       res.status(resStatus.badGateway).json({
//         statusCode: error,
//         error: `While working as a gateway to get a response needed to handle the request, got an invalid response.`
//       });
//       break;

//     case resStatus.serviceTemporarilyUnavaible: //503
//       res.status(resStatus.serviceTemporarilyUnavaible).json({
//         statusCode: error,
//         error: `The server is not ready to handle the request`
//       });
//       break;

//     case resStatus.gatewayTimeout: //504
//       res.status(resStatus.gatewayTimeout).json({
//         statusCode: error,
//         error: `The server is acting as a gateway and cannot get a response in time.`
//       });
//       break;

//     default:
//       res.json({ message: error.message });
//   }
//   next();
// }

// module.exports = errorHandler;
