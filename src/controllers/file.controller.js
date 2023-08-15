import { FileService } from "../services/index.js";

export const FileController = {
  get: async (req, res) => {
    try {
      const files = await FileService.get(req.query);
      res.json(files);
    } catch ({ error }) {
      res.json({ message: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const file = await FileService.getById(req.params.id);
      res.json(file);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  create: async (req, res) => {
    try {
      if (req.file) {
        req.file.path = req.file.path.replace(`\\`, `/`); // replace \\ with / in the file path

        const file = {
          link: `${req.protocol}://${req.get("host")}/${req.file.path}`,
          original_name: req.file.filename,
          current_name: req.file.originalname,
          type: req.file.mimetype,
          path: req.file.path,
        };

        const data = await FileService.create(file);
        res.status(200).json(data);
      } else {
        res.status(400).send("no file found!");
      }
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      if (req.file) {
        req.file.path = req.file.path.replace(`\\`, `/`);

        const file = {
          link: `${req.protocol}://${req.get("host")}/${req.file.path}`,
          original_name: req.file.filename,
          current_name: req.file.originalname,
          type: req.file.mimetype,
          path: req.file.path,
        };

        const data = await FileService.findByIdAndUpdate(req.params.id, file);
        res.status(200).json(data);
      } else {
        res.status(400).send("no file found!");
      }
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const result = await FileService.delete(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },
};
