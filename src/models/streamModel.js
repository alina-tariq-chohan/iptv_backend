import mongoose from "mongoose";

const streamSchema = mongoose.Schema({
  episode_id: { type: mongoose.Schema.Types.ObjectId, ref: "Episode" },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  time: { type: String },
});

export const StreamModel = mongoose.model("Stream", streamSchema);
