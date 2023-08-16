import { EpisodeModel } from "../models/index.js";
import mongoose from "mongoose";

export const EpisodeService = {
  get: (req, res) => {
    return EpisodeModel.find();
  },
  getById: (id) => {
    return EpisodeModel.findById(id);
  },
  create: (data) => {
    return EpisodeModel.create(data);
  },
  getAllStreamsByEpisodeId: async (_id) => {
    const result = await EpisodeModel.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(_id) },
      },
      {
        $lookup: {
          from: "streams",
          localField: "_id",
          foreignField: "episode_id",
          as: "stream",
        },
      },
    ]);
    return result;
  },
  update: ({ id, data }) => {
    return EpisodeModel.findByIdAndUpdate(id, data);
  },
  delete: (id) => {
    return EpisodeModel.findByIdAndDelete(id);
  },
};
