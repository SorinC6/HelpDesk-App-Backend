const Joi = require("joi");

const schemaValidate = schema => (req, res, next) => {
  const validBody = Joi.validate(req.body, schema);

  if (validBody.error === null) {
    next();
  } else {
    res.status(422).json({
      message: "Please provide valid credentinals"
    });
  }
};

module.exports = schemaValidate;
