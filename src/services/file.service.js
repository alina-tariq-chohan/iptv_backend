import { FileModel } from "../models/index.js";

export const FileService = {
  get: async (req, res) => {
    return FileModel.find();
  },
  getById: async (id) => {
    return FileModel.findById(id);
  },
  create: async (data) => {
    return FileModel.create(data);
  },
  update: async ({ id, data }) => {
    return FileModel.findByIdAndUpdate(id, data);
  },
  delete: async (id) => {
    return FileModel.findByIdAndDelete(id);
  },
};
