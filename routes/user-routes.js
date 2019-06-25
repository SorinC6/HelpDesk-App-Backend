const router = require("express").Router();
const bcrypt = require("bcryptjs");
const responseStatus = require("../config/responseStatuses");
const restricted = require("../middleware/restrictedRoute");
const validRole = require("../middleware/roleCheck");

const dbHelpers = require("../models/userHelper");

router.get("/users", restricted, validRole([3]), async (req, res, next) => {
  try {
    const users = await dbHelpers.getAllUsers();
    res.status(responseStatus.successful).json({ users });
  } catch (error) {
    next(responseStatus.serverError);
  }
});

module.exports = router;
