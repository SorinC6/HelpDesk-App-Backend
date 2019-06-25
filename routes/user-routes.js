const router = require("express").Router();
const responseStatus = require("../config/responseStatuses");
const restricted = require("../middleware/restrictedRoute");
const validRole = require("../middleware/roleCheck");

const dbHelpers = require("../models/userHelper");

router.get("/users", restricted, validRole([3, 2]), async (req, res, next) => {
  try {
    const users = await dbHelpers.getAllUsers();
    res.status(responseStatus.successful).json({ users });
  } catch (error) {
    next(responseStatus.serverError);
  }
});

router.delete(
  "/users/:id",
  restricted,
  validRole([3]),
  async (req, res, next) => {
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
  }
);

module.exports = router;
