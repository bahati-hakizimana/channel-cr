const Joi = require('joi');


exports.signupSchema = Joi.object({
    email: Joi.string()
    .min(6)
    .max(60)
    .required()
    .email({
        tids:{ allow : ['com', 'net']},
    }),
    password: Joi.string()
    .required()
    .pattern(new RegExp("[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?A-Z0-9]")),

})