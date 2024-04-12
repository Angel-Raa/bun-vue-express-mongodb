import mongoose from "mongoose";

try {
  const uri = "mongodb://localhost:27017/";
  await mongoose.connect(uri);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log(error);
}
