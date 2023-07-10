import { UserService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";

export const UserController = {
  get: async (req, res) => {
    try {
      const users = await UserService.get(req.query);
      return httpResponse.SUCCESS(res, users);
    } catch ({ error }) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  getById: async (req, res) => {
    try {
      const user = await UserService.getById(req.params.id);
      res.json(user);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  createForRegister: async (req, res) => {
    try {
      const result = await UserService.createUser(req.body);
      return httpResponse.CREATED(res, result);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  createForLogin: async (req, res) => {
    try {
      const result = await UserService.createLogin(req.body);
      return httpResponse.CREATED(res, result);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  getAllStreamsByUserId: async (req, res) => {
    const userId = req.params.id;
    const streams = await UserService.getAllStreamsByUserId(userId);
    res.json(streams);
  },

  getStreamByUserIdAndStreamId: async (req, res) => {
    const userId = req.params.id;
    const streamId = req.params.streamId;

    const stream = await UserService.getStreamByUserIdAndStreamId(
      userId,
      streamId
    );
    if (stream) {
      res.json(stream);
    } else {
      res.status(404).json({ error: "Stream not found" });
    }
  },

  update: async (req, res) => {
    try {
      const result = await UserService.update(req.params.id, req.body);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },

  delete: async (req, res) => {
    try {
      const result = await UserService.delete(req.params.id);
      res.status(200).json(result);
    } catch (err) {
      res.json({ message: err.message });
    }
  },
};
