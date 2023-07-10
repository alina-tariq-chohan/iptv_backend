import express from "express";
import { SeasonController } from "../controllers/seasonController.js";

const SeasonRouter = express.Router();

SeasonRouter.get("/", SeasonController.get);
SeasonRouter.get("/:id", SeasonController.getById);
SeasonRouter.post("/", SeasonController.create);
SeasonRouter.get("/:id/episodes", SeasonController.getAllEpisodesBySeasonId);
SeasonRouter.patch("/:id", SeasonController.update);
SeasonRouter.delete("/:id", SeasonController.delete);

export default SeasonRouter;
