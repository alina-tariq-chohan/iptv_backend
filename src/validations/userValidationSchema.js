import Joi from "joi";

export const schema = {
  id: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },
  register: {
    body: Joi.object().keys({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  },
  login: {
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required(),
    }),
  },
  update: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
    body: Joi.object().keys({
      name: Joi.string(),
      email: Joi.string().email(),
      password: Joi.string(),
    }),
  },
};
