import mongoose from "mongoose";

const episodeSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  season_id: { type: mongoose.Schema.Types.ObjectId, ref: "Season" },
  file_id: { type: mongoose.Schema.Types.ObjectId, ref: "File" },
});

export const EpisodeModel = mongoose.model("Episode", episodeSchema);
