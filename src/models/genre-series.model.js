import mongoose from "mongoose";

const genreSeriesSchema = mongoose.Schema({
  genre_id: { type: mongoose.Schema.Types.ObjectId, ref: "Genre" },
  series_id: { type: mongoose.Schema.Types.ObjectId, ref: "Series" },
});

export const GenreSeriesModel = mongoose.model(
  "GenreSeries",
  genreSeriesSchema
);
