const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Joi = require('joi')

router.post("/register", async (req, res) => {
  const creds = req.body;
  creds.password = habcrypt.hashSync(creds.password, 12);

  const validBody = await 

});
