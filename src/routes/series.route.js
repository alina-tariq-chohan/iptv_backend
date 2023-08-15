import express from "express";
import { SeriesController } from "../controllers/series.controller.js";

const SeriesRouter = express.Router();

SeriesRouter.get("/", SeriesController.get);
SeriesRouter.get("/:id", SeriesController.getById);
SeriesRouter.post("/", SeriesController.create);
SeriesRouter.get(
	"/:id/seasons",
	SeriesController.getAllSeasonsOfSeriesBySeriesId
);
SeriesRouter.get(
	"/:id/seasons/episodes",
	SeriesController.getAllEpisodesOfSeriesBySeriesId
);
SeriesRouter.patch("/:id", SeriesController.update);
SeriesRouter.delete("/:id", SeriesController.delete);

export default SeriesRouter;
