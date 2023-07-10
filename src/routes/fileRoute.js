import express from "express";
import upload from "../middlewares/fileUpload.js";
import { FileController } from "../controllers/fileController.js";

const FileRouter = express.Router();

FileRouter.get("/", FileController.get);
FileRouter.get("/:id", FileController.getById);
FileRouter.post("/", upload.single("file"), FileController.create);
FileRouter.patch("/:id", upload.single("file"), FileController.update);
FileRouter.delete("/:id", FileController.delete);

export default FileRouter;
