import Joi from "joi";

const schema = {
  add: {
    body: Joi.object().keys({
      name: Joi.string().required(),
      description: Joi.string(),
      series_id: Joi.string().required(),
    }),
  },
  update: {
    params: Joi.object().keys({
      id: Joi.string().required(),
    }),
    body: Joi.object().keys({
      name: Joi.string(),
      description: Joi.string(),
      series_id: Joi.string(),
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
