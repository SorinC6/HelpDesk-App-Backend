const db = require("../database/dbConfig");
const Joi = require("joi");

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
