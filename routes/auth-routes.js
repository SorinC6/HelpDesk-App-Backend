const router = require("express").Router();
const bcrypt = require("bcryptjs");
const dbHelpers = require("../models/userHelper");
const Joi = require("joi");
const generateToken = require("../middleware/generateToken");
const { responseStatus } = require("error-express-handler");
const schemaValid = require("../middleware/validate");

router.post(
  "/register",
  schemaValid(dbHelpers.userSchema),
  async (req, res, next) => {
    const creds = req.body;
    creds.password = bcrypt.hashSync(creds.password, 12);

    try {
      const result = await dbHelpers.registerUser(creds);
      res.status(200).json({
        id: result.id,
        email: result.email,
        username: result.username,
        role: result.role_id,
        message: `User: ${result.username} was registered succesfully`
      });
    } catch (error) {
      next(responseStatus.serverError);
    }
  }
);

router.post(
  "/login",
  schemaValid(dbHelpers.loginSchema),
  async (req, res, next) => {
    //
    const { username, password } = req.body;

    try {
      const user = await dbHelpers.findBy({ username });
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(responseStatus.successful).json({
          message: `Welcome ${user.username} !`,
          token: token,
          role: user.role_id,
          id: user.id
        });
      } else {
        next(responseStatus.badCredentials);
      }
    } catch (error) {
      next(responseStatus.serverError);
    }
  }
);

module.exports = router;
