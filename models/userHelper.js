const db = require("../database/dbConfig");
const Joi = require("joi");

const userSchema = Joi.object().keys({
  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .required(),
  username: Joi.string()
    .min(1)
    .max(30)
    .required(),
  password: Joi.string()
    .required()
    .min(3),
  role_id: Joi.number().integer()
});

//register a user
const registerUser = async user => {
  const [id] = await db("users").insert(user);
  const query = await db("users")
    .where({ id })
    .first();
  return query;
};

//filer users based of a field
const filter = async query => await db("users").where(query);

//get all users fron database
const getAllUsers = async () => {
  return await db("users");
};

module.exports = {
  userSchema,
  getAllUsers,
  registerUser
};
