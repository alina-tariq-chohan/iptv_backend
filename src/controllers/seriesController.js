import { SeriesService } from "../services/index.js";

export const SeriesController = {
  get: async (req, res) => {
    try {
      const series = await SeriesService.get(req.query);
      res.json(series);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const series = await SeriesService.getById(req.params.id);
      res.json(series);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  create: async (req, res) => {
    try {
      const result = await SeriesService.create(req.body);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  getAllSeasonsOfSeriesBySeriesId: async (req, res) => {
    const seriesId = req.params.id;
    const seasons = await SeriesService.getAllSeasonsOfSeriesBySeriesId(
      seriesId
    );
    res.json(seasons);
  },

  getAllEpisodesOfSeriesBySeriesId: async (req, res) => {
    const seriesId = req.params.id;
    const seasonsAndEpisodes =
      await SeriesService.getAllEpisodesOfSeriesBySeriesId(seriesId);
    res.json(seasonsAndEpisodes);
  },

  update: async (req, res) => {
    try {
      const result = await SeriesService.update(req.params.id, req.body);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const result = await SeriesService.delete(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },
};
