import mongoose from "mongoose";
const URL: string = "mongodb://localhost:27017/projectfuture";

export const mainConnection = async () => {
  try {
    await mongoose.connect(URL).then(() => {
      console.log("Database is now connected..🚀🚀🚀!");
    });
  } catch (error) {
    console.log(error);
  }
};
