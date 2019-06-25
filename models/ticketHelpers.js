const db = require("../database/dbConfig");
const Joi = require("joi");
const userHelpers = require("./userHelper");
const categoryHelpers = require("./categoryHelpers");

const ticketSchema = Joi.object().keys({
  title: Joi.string().required(),
  description: Joi.string().required(),
  tried: Joi.string().min(3),
  status: Joi.string().required(),
  student_id: Joi.number()
    .integer()
    .required(),
  category_id: Joi.number().integer()
});

const getTicket = async id => {
  let query = await db("tickets");

  if (id) {
    return await db("tickets").where({ id });
  }

  //   let tickets = await db("tickets as t")
  //     .join("users", "t.student_id", "users.id")
  //     .select(
  //       "t.title",
  //       "t.description",
  //       "t.status",
  //       "users.username as student"
  //     );

  const tickets = query;
  for (const ticket of tickets) {
    const category = await categoryHelpers.getCategoryBy(ticket.id);
    const student = await userHelpers.getStudentById(ticket.id);
    const helper = await userHelpers.getHelperbyId(ticket.id);
    ticket.categories = category.name;
    ticket.student = student.username;
    ticket.helper = helper.username;
  }

  return tickets;
};

const addTicket = async ticket => {
  return await db("tickets").insert(ticket);
};

module.exports = {
  ticketSchema,
  getTicket,
  addTicket
};
