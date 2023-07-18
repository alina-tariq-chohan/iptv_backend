import { UserModel } from "../models/index.js";
import mongoose from "mongoose";
import { UserStatuses } from "../constants/user-constants.js";
import TokenService from "./token.service.js";
import bcrypt from "bcrypt";

export const UserService = {
  get: () => {
    return UserModel.find();
  },
  getById: (id) => {
    return UserModel.findById(id);
  },
  createUser: async (data) => {
    // data.status = UserStatuses.REGISTERED;
    data.password = await bcrypt.hash(data.password, 10);
    return UserModel.create(data).then((user) => {
      delete user._doc.password;
      return user._doc;
    });
  },
  createLogin: async ({ email, password }) => {
    const isExists = await UserModel.findOne({ email });
    if (!isExists) throw new Error("User not found");
    const isMatch = await bcrypt.compare(password, isExists.password);
    if (!isMatch) throw new Error("Password is incorrect");
    const token = await TokenService.createJwtToken(isExists._doc);
    return {
      token,
      email: isExists.email,
      isVerified: isExists.email === UserStatuses.VERIFIED,
    };
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
