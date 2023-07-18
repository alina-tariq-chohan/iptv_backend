export const env = {
  port: process.env.PORT || 2001,
  nodeEnv: process.env.NODE_ENV || "development",
  mongodbUri: process.env.DB_URI || "mongodb://127.0.0.1:27017/my_first_task",
  jwtSecret: process.env.JWT_SECRET || "my_temporary_secret",
  tokens: { jwtSecret: process.env.JWT_SECRET || "some secret" },
};
