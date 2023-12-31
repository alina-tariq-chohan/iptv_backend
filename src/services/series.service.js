import { SeriesModel } from "../models/index.js";
import { GenreSeriesService } from "./genre-series.services.js";
import mongoose from "mongoose";

export const SeriesService = {
	get: () => {
		return SeriesModel.aggregate([
			{
				$lookup: {
					from: "genreseries", // Collection name
					localField: "_id",
					foreignField: "series_id",
					as: "genreSeries",
				},
			},
			{
				$lookup: {
					from: "genres", // Collection name
					localField: "genreSeries.genre_id",
					foreignField: "_id",
					as: "genres",
				},
			},
		]);
	},
	getById: (id) => {
		return SeriesModel.findById(id);
	},

	create: async (data) => {
		const series = await SeriesModel.create(data);
		const genreSeries = data.genres.map((genre) => ({
			genre_id: genre,
			series_id: series._id,
		}));
		await GenreSeriesService.createMany(genreSeries);
		return series;
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

	update: async (id, data) => {
		const existingSeries = await SeriesModel.findById(id);

		if (!existingSeries) {
			throw new Error("Series not found");
		}

		existingSeries.name = data.name;
		existingSeries.description = data.description;

		await existingSeries.save();

		if (data.genres && data.genres.length > 0) {
			await GenreSeriesService.deleteByFilter({ series_id: id });

			const genreSeries = data.genres.map((genre) => ({
				genre_id: genre,
				series_id: id,
			}));
			await GenreSeriesService.createMany(genreSeries);
		}

		return existingSeries;
	},

	// update: async ({ id, data }) => {
	//   return SeriesModel.findByIdAndUpdate(id, data);
	// },
	delete: async (id) => {
		return SeriesModel.findByIdAndDelete(id);
	},
};
