import { SeriesModel } from "../models/index.js";
import mongoose from "mongoose";

export const SeriesService = {
  get: () => {
    return SeriesModel.find();
  },
  getById: (id) => {
    return SeriesModel.findById(id);
  },

  create: async (data) => {
    return SeriesModel.create(data);
  },
  getAllSeasonsOfSeriesBySeriesId: async (_id) => {
    const result = await SeriesModel.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(_id) },
      },
      {
        $lookup: {
          from: "seasons",
          localField: "_id",
          foreignField: "series_id",
          as: "seasons",
        },
      },
    ]);
    return result;
  },
  getAllEpisodesOfSeriesBySeriesId: async (_id) => {
    const result = await SeriesModel.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(_id) },
      },
      {
        $lookup: {
          from: "seasons",
          localField: "_id",
          foreignField: "series_id",
          as: "seasons",
          pipeline: [
            {
              $lookup: {
                from: "episodes",
                localField: "_id",
                foreignField: "season_id",
                as: "episodes",
              },
            },
          ],
        },
      },
    ]);
    return result;
  },
  update: async ({ id, ...rest }) => {
    return SeriesModel.findByIdAndUpdate(id, rest);
  },
  delete: async (id) => {
    return SeriesModel.findByIdAndDelete(id);
  },
};
