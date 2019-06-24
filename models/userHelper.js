const db = require("../database/dbConfig");
const joy = require("joi");

async function getAllUsers() {
  return await db("users");
}

module.exports = {
  getAllUsers
};
