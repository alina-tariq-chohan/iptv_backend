import { UserModel } from "../models/index.js";
import mongoose from "mongoose";
import Jwt from "jsonwebtoken";

export const UserService = {
  get: () => {
    return UserModel.find();
  },
  getById: (id) => {
    return UserModel.findById(id);
  },
  createUser: (data) => {
    return UserModel.create(data);
  },
  createLogin: async (data) => {
    const user = await UserModel.findOne(data);
    if (!user) return res.send(401).send("Invalid email or password");
    delete user._doc.password;
    const token = Jwt.sign(user._doc, "my_temporary_secret", {
      expiresIn: "1h",
    });
    return token;
  },

  getAllStreamsByUserId: async (_id) => {
    const result = await UserModel.aggregate([
      {
        $match: { _id: new mongoose.Types.ObjectId(_id) },
      },
      {
        $lookup: {
          from: "streams",
          localField: "_id",
          foreignField: "user_id",
          as: "streams",
        },
      },
    ]);
    return result;
  },
  // { _id: streamId, user_id: userId }

  getStreamByUserIdAndStreamId: async (_id, streamId) => {
    const result = await UserModel.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(_id),
        },
      },
      {
        $lookup: {
          from: "streams",
          let: { userId: "$_id" },
          pipeline: [
            {
              $match: {
                $and: [
                  { $expr: { $eq: ["$user_id", "$$userId"] } },
                  {
                    $expr: {
                      $eq: ["$_id", new mongoose.Types.ObjectId(streamId)],
                    },
                  },
                ],
              },
            },
          ],
          as: "streams",
        },
      },
    ]);
    return result;
  },

  update: ({ id, ...rest }) => {
    return UserModel.findByIdAndUpdate(id, rest);
  },
  delete: (id) => {
    return UserModel.findByIdAndDelete(id);
  },
};
