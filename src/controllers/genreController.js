import { GenreService } from "../services/index.js";

export const GenreController = {
  get: async (req, res) => {
    try {
      const genre = await GenreService.get(req.query);
      res.json(genre);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const genre = await GenreService.getById(req.params.id);
      res.json(genre);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  getAllSeriesById: async (req, res) => {
    try {
      const genre = await GenreService.getAllSeriesById(req.params.id);
      res.json(genre);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  getSeriesOfSeasonsByGenreId: async (req, res) => {
    const genreId = req.params.id;
    const seasons = await GenreService.getSeriesOfSeasonsByGenreId(genreId);
    res.json(seasons);
  },

  create: async (req, res) => {
    try {
      const result = await GenreService.create(req.body);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const result = await GenreService.update(req.params.id, req.body);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const result = await GenreService.delete(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },
};
