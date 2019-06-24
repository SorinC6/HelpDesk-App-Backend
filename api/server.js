const expresss = require("express");
const helmet = require("helmet");
const cors = require("cors");

//routes here

//server
const server = expresss();
server.use(cors());
server.use(helmet());
server.use(expresss.json());

//use the router

//export server
module.exports = server;
