import express from "express";
import { EpisodeController } from "../controllers/episode.controller.js";

const EpisodeRouter = express.Router();

EpisodeRouter.get("/", EpisodeController.get);
EpisodeRouter.get("/:id", EpisodeController.getById);
EpisodeRouter.post("/", EpisodeController.create);
EpisodeRouter.get("/:id/streams", EpisodeController.getAllStreamsByEpisodeId);
EpisodeRouter.patch("/:id", EpisodeController.update);
EpisodeRouter.delete("/:id", EpisodeController.delete);

export default EpisodeRouter;
