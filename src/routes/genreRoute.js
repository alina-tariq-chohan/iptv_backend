import express from "express";
import { GenreController } from "../controllers/genreController.js";

const GenreRouter = express.Router();

GenreRouter.get("/", GenreController.get);
GenreRouter.get("/:id", GenreController.getById);
GenreRouter.get("/:id/genreseries/series", GenreController.getAllSeriesById);
GenreRouter.get(
  "/:id/genreseries/series/seasons",
  GenreController.getSeriesOfSeasonsByGenreId
);
GenreRouter.post("/", GenreController.create);
GenreRouter.patch("/:id", GenreController.update);
GenreRouter.delete("/:id", GenreController.delete);

export default GenreRouter;
