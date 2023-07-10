import mongoose from "mongoose";

const fileSchema = mongoose.Schema({
  original_name: { type: String, required: true }, // file name
  current_name: { type: String, required: true }, // original file name
  path: { type: String, required: true }, // path to the file in the server
  type: { type: String, required: true }, // type of the file (image, video, audio, etc)
  link: { type: String }, // link to the file in the server
});

export const FileModel = mongoose.model("File", fileSchema);
