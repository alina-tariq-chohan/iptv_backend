import { SeasonService } from "../services/index.js";

export const SeasonController = {
  get: async (req, res) => {
    try {
      const seasons = await SeasonService.get(req.query);
      res.json(seasons);
    } catch ({ error }) {
      res.json({ message: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const season = await SeasonService.getById(req.params.id);
      res.json(season);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  getAllEpisodesBySeasonId: async (req, res) => {
    const seasonId = req.params.id;

    const episodes = await SeasonService.getAllEpisodesBySeasonId(seasonId);
    res.json(episodes);
  },

  create: async (req, res) => {
    try {
      const result = await SeasonService.create(req.body);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const result = await SeasonService.update(req.params.id, req.body);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const result = await SeasonService.delete(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },
};
