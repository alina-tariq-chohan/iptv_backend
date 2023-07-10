import express from "express";

// routes
// import userRoute from "./user.route.js";
import userRouter from "./userRoute.js";
import streamRouter from "./streamRoute.js";
import episodeRouter from "./episodeRoute.js";
import genreRouter from "./genreRoute.js";
import genreseriesRouter from "./genre-seriesRoute.js";
import seriesRouter from "./seriesRoute.js";
import seasonRouter from "./seasonRoute.js";
import fileRouter from "./fileRoute.js";
import genreSeriesRouter from "./genre-seriesRoute.js";

const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes

// Un-Protected Routes
// unProtectedRouter.use("/user", userRoute);
unProtectedRouter.use("/user", userRouter);
unProtectedRouter.use("/stream", streamRouter);
unProtectedRouter.use("/episode", episodeRouter);
unProtectedRouter.use("/genre", genreRouter);
unProtectedRouter.use("/genreseries", genreseriesRouter);
unProtectedRouter.use("/series", seriesRouter);
unProtectedRouter.use("/season", seasonRouter);
unProtectedRouter.use("/file", fileRouter);
unProtectedRouter.use("/", genreSeriesRouter);
unProtectedRouter.use("/images", express.static("uploads/images"));

export { protectedRouter, unProtectedRouter };
