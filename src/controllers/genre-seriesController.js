import { GenreSeriesService } from "../services/index.js";

export const GenreSeriesController = {
  get: async (req, res) => {
    try {
      const genreSeries = await GenreSeriesService.get(req.query);
      res.json(genreSeries);
    } catch ({ error }) {
      res.json({ message: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const genreSeries = await GenreSeriesService.getById(req.params.id);
      res.json(genreSeries);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  create: async (req, res) => {
    try {
      const result = await GenreSeriesService.create(req.body);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const result = await GenreSeriesService.update(req.params.id, req.body);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const result = await GenreSeriesService.delete(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },
};
