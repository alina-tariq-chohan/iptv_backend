import express from "express";
import { StreamController } from "../controllers/stream.controller.js";

const StreamRouter = express.Router();

StreamRouter.get("/", StreamController.get);
StreamRouter.get("/:id", StreamController.getById);
StreamRouter.post("/", StreamController.create);
StreamRouter.get("/:id/episode", StreamController.getEpisodeOfStreamByStreamId);
StreamRouter.get("/:id/user", StreamController.getUserByStreamId);
StreamRouter.get(
	"/:id/episode/season",
	StreamController.getSeasonOfEpisodeByStreamId
);
StreamRouter.get(
	"/:id/episode/season/series",
	StreamController.getSeriesOfSeasonOfEpisodeByStreamId
);
StreamRouter.get(
	"/:id/episode/season/series/genreseries/genre",
	StreamController.getGenreOfSeriesOfSeasonOfEpisodeByStreamId
);
StreamRouter.patch("/:id", StreamController.update);
StreamRouter.delete("/:id", StreamController.delete);

export default StreamRouter;
