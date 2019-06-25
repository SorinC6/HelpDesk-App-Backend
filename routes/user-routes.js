const router = require("express").Router();
const bcrypt = require("bcryptjs");
const responseStatus = require("../config/responseStatuses");

const dbHelpers = require("../models/userHelper");

router.get("/users", async (req, res, next) => {
  try {
    const user = await dbHelpers.getAllUsers();
    res.status(responseStatus.successful).json({ users });
  } catch (error) {
    next(responseStatus.serverError);
  }
});

module.exports = router;
