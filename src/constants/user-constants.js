export const UserStatuses = {
  REGISTERED: "registered",
  VERIFIED: "verified",
};
export const UserStatusesArray = Object.values(UserStatuses);

// createUser: async (data) => {
//     data.email = UserStatuses.REGISTERED;
//     data.password = await bcrypt.hash(data.password, 10);
//     return UserModel.create(data).then((user) => {
//       delete user._doc.password;
//       return user._doc;
//     });
//   },
//   createLogin: async ({ email, password }) => {
//     const isExists = await UserModel.findOne({ email });
//     if (!isExists) throw new Error("User not found");
//     const isMatch = await bcrypt.compare(password, isExists.password);
//     if (!isMatch) throw new Error("Password is incorrect");
//     const token = await TokenService.createJwtToken(isExists._doc);
//     return {
//       token,
//       email: isExists.email,
//       isVerified: isExists.email === UserStatuses.VERIFIED,
//     };
//   },
