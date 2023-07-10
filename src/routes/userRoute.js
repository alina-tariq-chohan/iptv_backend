import express from "express";
import { schema } from "../validations/index.js";
import { authenticate } from "../middlewares/authenticate.js";
import { UserController } from "../controllers/index.js";
import { validate } from "../middlewares/validate.js";

const UserRouter = express.Router();

UserRouter.get("/", authenticate, UserController.get);
UserRouter.get(
  "/:id",
  authenticate,
  validate(schema.id.params),
  UserController.getById
);
UserRouter.post(
  "/register",
  validate(schema.register.body),
  UserController.createForRegister
);
UserRouter.post(
  "/login",
  validate(schema.login.body),
  UserController.createForLogin
);
UserRouter.get("/:id/streams", UserController.getAllStreamsByUserId);
UserRouter.get(
  "/:id/streams/:streamId",
  UserController.getStreamByUserIdAndStreamId
);
UserRouter.patch(
  "/:id",
  authenticate,
  validate(schema.update.params),
  validate(schema.update.body),
  UserController.update
);
UserRouter.delete(
  "/:id",
  authenticate,
  validate(schema.id.params),
  UserController.delete
);

export default UserRouter;
