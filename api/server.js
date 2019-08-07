const expresss = require("express");
const globalMiddleware = require("../middleware/globalMiddleware");
const { errorHandler } = require("error-express-handler");

//routes here
const userRoutes = require("../routes/user-routes");
const authRoutes = require("../routes/auth-routes");
const ticketsRoutes = require("../routes/tickets-routes");

//server
const server = expresss();
globalMiddleware(server);

//use the router
server.use(userRoutes);
server.use(authRoutes);
server.use(ticketsRoutes);
server.use(errorHandler);

//export server
module.exports = server;
