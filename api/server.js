const expresss = require("express");
const helmet = require("helmet");
const cors = require("cors");

//routes here
const userRoutes = require("../routes/user-routes");

//server
const server = expresss();
server.use(cors());
server.use(helmet());
server.use(expresss.json());

//use the router
server.use(userRoutes);

//export server
module.exports = server;
