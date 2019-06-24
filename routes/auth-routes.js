const router = require("express").Router();
const bcrypt = require("bcryptjs");
const dbHelpers = require("../models/userHelper");
const Joi = require("joi");
const generateToken = require("../middleware/generateToken");

router.post("/register", async (req, res) => {
  const creds = req.body;
  creds.password = bcrypt.hashSync(creds.password, 12);

  const validBody = Joi.validate(creds, dbHelpers.userSchema);

  if (validBody.error === null) {
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
      res.status(500).json({ error: "error trying to register a user" });
    }
  } else {
    res.status(401).json({
      message: "please provide correct email , username and password"
    });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const valid = Joi.validate(req.body, dbHelpers.loginSchema);

  if (valid.error === null) {
    try {
      const user = await dbHelpers.findBy({ username });
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: `Welcome ${user.username} !`,
          token: token,
          role: user.role_id,
          id: user.id
        });
      } else {
        res.status(401).json({ message: "invalid Credentials" });
      }
    } catch (error) {
      res.status(500).json({ error: "error trying to login the user" });
    }
  } else {
    res.status(400).json({ message: "please provide username and password" });
  }
});

module.exports = router;
