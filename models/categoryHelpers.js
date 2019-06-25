const db = require("../database/dbConfig");
const Joi = require("joi");

const getCategoryBy = async ticketId => {
  const query = await db("categories as c")
    .join("tickets")
    .where("c.id", ticketId)
    .select("name", "c.id")
    .first();

  return query;
};

module.exports = { getCategoryBy };
