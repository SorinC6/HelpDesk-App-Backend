const expresss = require("express");
const helmet = require("helmet");
const cors = require("cors");

module.exports = server => {
  server.use(cors());
  server.use(helmet());
  server.use(expresss.json());
};
