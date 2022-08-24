import mongoose from "mongoose";

export const dbConnection = () => {
  try {
    const connectionString = mongoose.connect(process.env.MONGO_CLIENT);
    connectionString && console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
export default dbConnection;
