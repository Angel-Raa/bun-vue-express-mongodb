import mongoose from "mongoose";
const { Schema, model } = mongoose;
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
});

export const User = model("user", UserSchema);
