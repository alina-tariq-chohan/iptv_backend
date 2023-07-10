import { StreamModel } from "../models/index.js";
import mongoose from "mongoose";

export const StreamService = {
  get: (req, res) => {
    return StreamModel.find();
  },
  getById: (id) => {
    return StreamModel.findById(id);
  },
  create: (data) => {
    return StreamModel.create(data);
  },
  getEpisodeOfStreamByStreamId: async (_id) => {
    const episode = await StreamModel.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(_id) },
      },
      {
        $lookup: {
          from: "episodes",
          localField: "episode_id",
          foreignField: "_id",
          as: "episode",
        },
      },
      {
        $unwind: "$episode",
      },
    ]);

    return episode;
  },
  getUserByStreamId: async (_id) => {
    const users = await StreamModel.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(_id) },
      },
      {
        $lookup: {
          from: "users",
          localField: "user_id",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user",
      },
    ]);

    return users;
  },
  getSeasonOfEpisodeByStreamId: async (_id) => {
    const seasonEpisode = await StreamModel.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(_id) },
      },
      {
        $lookup: {
          from: "episodes",
          localField: "episode_id",
          foreignField: "_id",
          as: "episode",
          pipeline: [
            {
              $lookup: {
                from: "seasons",
                localField: "season_id",
                foreignField: "_id",
                as: "season",
              },
            },
          ],
        },
      },
      { $unwind: "$episode" },
      { $unwind: "$episode.season" },
    ]);

    return seasonEpisode;
  },
  getSeriesOfSeasonOfEpisodeByStreamId: async (_id) => {
    const seriesSeasonEpisode = await StreamModel.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(_id) },
      },
      {
        $lookup: {
          from: "episodes",
          localField: "episode_id",
          foreignField: "_id",
          as: "episode",
          pipeline: [
            {
              $lookup: {
                from: "seasons",
                localField: "season_id",
                foreignField: "_id",
                as: "season",
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
          ],
        },
      },
      { $unwind: "$episode" },
      { $unwind: "$episode.season" },
      { $unwind: "$episode.season.series" },
    ]);

    return seriesSeasonEpisode;
  },
  getGenreOfSeriesOfSeasonOfEpisodeByStreamId: async (_id) => {
    const genreSeriesSeasonEpisode = await StreamModel.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(_id) },
      },
      {
        $lookup: {
          from: "episodes",
          localField: "episode_id",
          foreignField: "_id",
          as: "episode",
          pipeline: [
            {
              $lookup: {
                from: "seasons",
                localField: "season_id",
                foreignField: "_id",
                as: "season",
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
                            from: "genreseries",
                            localField: "_id",
                            foreignField: "series_id",
                            as: "genreseries",
                            pipeline: [
                              {
                                $lookup: {
                                  from: "genres",
                                  localField: "genre_id",
                                  foreignField: "_id",
                                  as: "genre",
                                },
                              },
                            ],
                          },
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        },
      },
      { $unwind: "$episode" },
      { $unwind: "$episode.season" },
      { $unwind: "$episode.season.series" },
      { $unwind: "$episode.season.series.genreseries" },
      { $unwind: "$episode.season.series.genreseries.genre" },
    ]);

    return genreSeriesSeasonEpisode;
  },
  update: ({ id, ...rest }) => {
    return StreamModel.findByIdAndUpdate(id, rest);
  },
  delete: (id) => {
    return StreamModel.findByIdAndDelete(id);
  },
};
