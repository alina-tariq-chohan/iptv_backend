import mongoose from "mongoose";

const seriesSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  trailer_id: { type: mongoose.Schema.Types.ObjectId, ref: "File" },
  thumbnail_id: { type: mongoose.Schema.Types.ObjectId, ref: "File" },
});

export const SeriesModel = mongoose.model("Series", seriesSchema);
