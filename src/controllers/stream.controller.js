import { StreamService } from "../services/index.js";

export const StreamController = {
  get: async (req, res) => {
    try {
      const stream = await StreamService.get(req.query);
      res.json(stream);
    } catch ({ error }) {
      res.json({ message: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const stream = await StreamService.getById(req.params.id);
      res.json(stream);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  create: async (req, res) => {
    try {
      req.body.user_id = req.user._id
      const result = await StreamService.create(req.body);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  getEpisodeOfStreamByStreamId: async (req, res) => {
    const streamId = req.params.id;
    try {
      const episode = await StreamService.getEpisodeOfStreamByStreamId(
        streamId
      );
      if (episode) {
        res.json(episode);
      } else {
        res.status(404).json({ error: "Episode not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getUserByStreamId: async (req, res) => {
    const streamId = req.params.id;
    try {
      const user = await StreamService.getUserByStreamId(streamId);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getSeasonOfEpisodeByStreamId: async (req, res) => {
    const streamId = req.params.id;
    try {
      const season = await StreamService.getSeasonOfEpisodeByStreamId(streamId);
      if (season) {
        res.json(season);
      } else {
        res.status(404).json({ error: "Season not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getSeriesOfSeasonOfEpisodeByStreamId: async (req, res) => {
    const streamId = req.params.id;
    try {
      const series = await StreamService.getSeriesOfSeasonOfEpisodeByStreamId(
        streamId
      );
      if (series) {
        res.json(series);
      } else {
        res.status(404).json({ error: "Series not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  getGenreOfSeriesOfSeasonOfEpisodeByStreamId: async (req, res) => {
    const streamId = req.params.id;
    try {
      const genre =
        await StreamService.getGenreOfSeriesOfSeasonOfEpisodeByStreamId(
          streamId
        );
      if (genre) {
        res.json(genre);
      } else {
        res.status(404).json({ error: "Genre not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  },

  update: async (req, res) => {
    try {
      const result = await StreamService.update(req.params.id, req.body);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const result = await StreamService.delete(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },
};
