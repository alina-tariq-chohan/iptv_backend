import mongoose from "mongoose";

const seasonSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  series_id: { type: mongoose.Schema.Types.ObjectId, ref: "Series" },
});

export const SeasonModel = mongoose.model("Season", seasonSchema);
