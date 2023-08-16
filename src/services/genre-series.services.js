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
  createMany: async (data) => {
    return GenreSeriesModel.insertMany(data);
  },
  update: async ({ id, data }) => {
    return GenreSeriesModel.findByIdAndUpdate(id, data);
  },
  delete: async (id) => {
    return GenreSeriesModel.findByIdAndDelete(id);
  },
};
