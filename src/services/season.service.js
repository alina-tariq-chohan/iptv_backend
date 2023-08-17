import { SeasonModel } from "../models/index.js";
import mongoose from "mongoose";

export const SeasonService = {
  get: () => {
    return SeasonModel.aggregate([
      {
        $lookup: {
          from: "series",
          localField: "series_id",
          foreignField: "_id",
          as: "series",
        },
      },
    ]);
  },
  getById: async (id) => {
    return SeasonModel.findById(id);
  },
  create: async (data) => {
    return SeasonModel.create(data);
  },
  getAllEpisodesBySeasonId: async (_id) => {
    const result = await SeasonModel.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(_id) },
      },
      {
        $lookup: {
          from: "episodes",
          localField: "_id",
          foreignField: "season_id",
          as: "episode",
        },
      },
    ]);
    return result;
  },
  update: async (id, data) => {
    return SeasonModel.findByIdAndUpdate(id, data);
  },
  delete: async (id) => {
    return SeasonModel.findByIdAndDelete(id);
  },
};
