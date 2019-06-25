const router = require("express").Router();
const responseStatus = require("../config/responseStatuses");
const restricted = require("../middleware/restrictedRoute");
const validRole = require("../middleware/roleCheck");

//POST
router.post(
  "/tickets",
  restricted,
  validRole([1, 2, 3]),
  async (req, res, next) => {
      
  }
);
