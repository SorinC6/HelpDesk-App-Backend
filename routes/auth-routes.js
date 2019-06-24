const router = require("express").Router();
const bcrypt = require("bcryptjs");
const Joi = require("joi");
const dbHelpers = require("../models/userHelper");

router.post("/register", async (req, res) => {
  const creds = req.body;
  creds.password = habcrypt.hashSync(creds.password, 12);

  const validBody = await dbHelpers.userSchema.validate(creds);

  if(validBody){
      
  }
});
