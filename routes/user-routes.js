const router = require("express").Router();
//const responseStatus = require("../config/responseStatuses");
const { responseStatus } = require("error-express-handler");
const restricted = require("../middleware/restrictedRoute");
const validRole = require("../middleware/roleCheck");

const dbHelpers = require("../models/userHelper");

//need to put restricted and valid roles
router.get("/users", async (req, res, next) => {
  try {
    const users = await dbHelpers.getAllUsers();
    res.status(responseStatus.successful).json({ users });
  } catch (error) {
    next(responseStatus.serverError);
  }
});

// removed resprected and  validRole([3]),
router.delete("/users/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await dbHelpers.deleteUserById(id);
    if (result === 1) {
      res.status(responseStatus.successful).json({
        message: "Delete user Sucesfully"
      });
    } else {
      next(responseStatus.notFound);
    }
  } catch (error) {
    next(responseStatus.serverError);
  }
});

module.exports = router;
