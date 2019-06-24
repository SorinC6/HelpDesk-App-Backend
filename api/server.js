const expresss = require("express");
const helmet = require("helmet");
const cors = require("cors");

//routes here
const userRoutes = require("../routes/user-routes");
const authRoutes = require("../routes/auth-routes");

//server
const server = expresss();
server.use(cors());
server.use(helmet());
server.use(expresss.json());

//use the router
server.use(userRoutes);
server.use(authRoutes);

//export server
module.exports = server;
