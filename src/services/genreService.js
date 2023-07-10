import { GenreModel } from "../models/index.js";
import mongoose from "mongoose";

export const GenreService = {
  get: async (req, res) => {
    return GenreModel.find();
  },
  getById: async (id) => {
    return GenreModel.findById(id);
  },
  getAllSeriesById: async (_id) => {
    const result = await genreModel.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(_id) },
      },
      {
        $lookup: {
          from: "genreseries",
          localField: "_id",
          foreignField: "genre_id",
          as: "genreseries",
          pipeline: [
            {
              $lookup: {
                from: "series",
                localField: "series_id",
                foreignField: "_id",
                as: "series",
              },
            },
          ],
        },
      },

      { $unwind: "$genreseries" },
      { $unwind: "$genreseries.series" },
    ]);
    return result;
  },
  getSeriesOfSeasonsByGenreId: async (_id) => {
    const result = await GenreModel.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(_id) },
      },
      {
        $lookup: {
          from: "genreseries",
          localField: "_id",
          foreignField: "genre_id",
          as: "genreseries",
          pipeline: [
            {
              $lookup: {
                from: "series",
                localField: "series_id",
                foreignField: "_id",
                as: "series",
                pipeline: [
                  {
                    $lookup: {
                      from: "seasons",
                      localField: "_id",
                      foreignField: "series_id",
                      as: "seasons",
                    },
                  },
                ],
              },
            },
          ],
        },
      },

      { $unwind: "$genreseries" },
      { $unwind: "$genreseries.series" },
      { $unwind: "$genreseries.series.seasons" },
    ]);
    return result;
  },
  create: async (data) => {
    return GenreModel.create(data);
  },
  update: async ({ id }) => {
    return GenreModel.findByIdAndUpdate(id);
  },
  delete: async (id) => {
    return GenreModel.findByIdAndDelete(id);
  },
};
