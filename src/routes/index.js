import express from "express";

// routes
// import userRoute from "./user.route.js";
import userRouter from "./user.route.js";
import streamRouter from "./stream.route.js";
import episodeRouter from "./episode.route.js";
import genreRouter from "./genre.route.js";
import seriesRouter from "./series.route.js";
import seasonRouter from "./season.route.js";
import fileRouter from "./file.route.js";

const protectedRouter = express.Router();
const unProtectedRouter = express.Router();

// Protected Routes

// Un-Protected Routes
// unProtectedRouter.use("/user", userRoute);
unProtectedRouter.use("/user", userRouter);
protectedRouter.use("/stream", streamRouter);
protectedRouter.use("/episode", episodeRouter);
protectedRouter.use("/genre", genreRouter);
protectedRouter.use("/series", seriesRouter);
protectedRouter.use("/season", seasonRouter);
protectedRouter.use("/file", fileRouter);
protectedRouter.use("/images", express.static("uploads/images"));

export { protectedRouter, unProtectedRouter };
