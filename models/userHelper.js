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

const loginSchema = Joi.object().keys({
  username: Joi.string()
    .min(1)
    .max(30)
    .required(),
  password: Joi.string()
    .required()
    .min(3)
});

//get a student by id
const getStudentById = ticketId => {
  const query = db("users")
    .join("tickets as t", "t.student_id", "users.id")
    .where("t.id", ticketId)
    .select("username")
    .first();
  return query;
};

const getHelperbyId = helperId => {
  const query = db("users")
    .join("tickets as t", "t.helper_id", "users.id")
    .where("t.id", helperId)
    .select("username")
    .first();
  return query;
};

//register a user
const registerUser = async user => {
  const [id] = await db("users").insert(user);
  const query = await db("users")
    .where({ id })
    .first();
  return query;
};

//filer users based of a field
const findBy = async filter => {
  return await db("users")
    .where(filter)
    .first();
};

//get all users fron database
const getAllUsers = async () => {
  return await db("users")
    .join("roles", "users.role_id", "roles.id")
    .select(
      "users.id",
      "users.email",
      "users.username",
      "users.password",
      "roles.name as role"
    );
};

//delete a user
const deleteUserById = async id => {
  return await db("users")
    .where({ id })
    .del();
};

module.exports = {
  userSchema,
  loginSchema,
  getAllUsers,
  registerUser,
  findBy,
  deleteUserById,
  getHelperbyId,
  getStudentById
};
