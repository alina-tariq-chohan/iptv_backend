import { EpisodeService } from "../services/index.js";

export const EpisodeController = {
  get: async (req, res) => {
    try {
      const episode = await EpisodeService.get(req.query);
      res.json(episode);
    } catch ({ error }) {
      res.json({ message: err.message });
    }
  },

  getById: async (req, res) => {
    try {
      const episode = await EpisodeService.getById(req.params.id);
      res.json(episode);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  create: async (req, res) => {
    try {
      const result = await EpisodeService.create(req.body);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  getAllStreamsByEpisodeId: async (req, res) => {
    const episodeId = req.params.id;
    const streams = await EpisodeService.getAllStreamsByEpisodeId(episodeId);
    res.json(streams);
    // try {
    //     const streams = await EpisodeService.getUserByStreamId(episodeId);
    //     if (streams) {
    //       res.json(streams);
    //     } else {
    //       res.status(404).json({ error: 'Streams not found' });
    //     }
    //   } catch (error) {
    //     res.status(500).json({ error: 'Internal server error' });
    //   }
  },

  update: async (req, res) => {
    try {
      const result = await EpisodeService.update(req.params.id, req.body);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const result = await EpisodeService.delete(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },
};
