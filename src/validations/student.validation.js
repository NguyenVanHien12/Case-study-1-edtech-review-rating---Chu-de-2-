const Joi = require('joi');

const studentSchema = Joi.object({
  name: Joi.string().max(100).required(),
  email: Joi.string().email().max(100).required(),
  password: Joi.string().min(6).max(100).required()
});

module.exports = studentSchema;