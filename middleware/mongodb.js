import mongoose from "mongoose";

export function connectDB() {
  return mongoose.connect(process.env.mongodburl, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
}
export function connectionClose() {
  return mongoose.connection.close();
}