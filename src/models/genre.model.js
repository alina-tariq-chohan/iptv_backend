import mongoose from "mongoose";

const genreSchema = mongoose.Schema({
  name: { type: String, required: true },
});

export const GenreModel = mongoose.model("Genre", genreSchema);
