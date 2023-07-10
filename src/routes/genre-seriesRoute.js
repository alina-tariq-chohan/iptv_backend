import express from "express";
import { GenreSeriesController } from "../controllers/genre-seriesController.js";

const GenreSeriesRouter = express.Router();

GenreSeriesRouter.get("/", GenreSeriesController.get);
GenreSeriesRouter.get("/:id", GenreSeriesController.getById);
GenreSeriesRouter.post("/", GenreSeriesController.create);
GenreSeriesRouter.post("/", GenreSeriesController.create);
GenreSeriesRouter.post("/", GenreSeriesController.create);
GenreSeriesRouter.patch("/:id", GenreSeriesController.update);
GenreSeriesRouter.delete("/:id", GenreSeriesController.delete);

export default GenreSeriesRouter;
