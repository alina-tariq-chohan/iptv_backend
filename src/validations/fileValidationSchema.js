import Joi from "joi";

const schema = {
  add: {
    body: Joi.object().keys({
      original_name: Joi.string().required(),
      current_name: Joi.string(),
      path: Joi.string().required(),
      type: Joi.string().required(),
      link: Joi.string().required(),
    }),
  },
  update: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
    body: Joi.object().keys({
      original_name: Joi.string(),
      current_name: Joi,
      path: Joi.string(),
      type: Joi.string(),
      link: Joi.string(),
    }),
  },
  delete: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },
  getById: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
  },
};

export default schema;
