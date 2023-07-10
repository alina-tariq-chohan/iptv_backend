import { GenreSeriesModel } from "../models/index.js";

export const GenreSeriesService = {
  get: async (req, res) => {
    return GenreSeriesModel.find();
  },
  getById: async (id) => {
    return GenreSeriesModel.findById(id);
  },
  create: async (data) => {
    return GenreSeriesModel.create(data);
  },
  update: async ({ id, ...rest }) => {
    return GenreSeriesModel.findByIdAndUpdate(id, rest);
  },
  delete: async (id) => {
    return GenreSeriesModel.findByIdAndDelete(id);
  },
};
