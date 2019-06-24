const router = require("express").Router();
const bcrypt = require("bcryptjs");
const dbHelpers = require("../models/userHelper");
const Joi = require("joi");

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

module.exports = router;
