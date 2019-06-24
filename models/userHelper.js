const db = require("../database/dbConfig");
const joy = require("joi");

const userSchema = Joi.object().keys({
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required(),
  username: Joi.string()
    .alphanum()
    .min(1)
    .max(30)
    .required(),
  password: Joi.string()
    .required()
    .min(3),
  role_id: Joi.number.integer()
});

const getAllUsers = async () => {
  return await db("users");
};

module.exports = {
  userSchema,
  getAllUsers
};
