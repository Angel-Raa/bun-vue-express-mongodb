import mongoose, { Document } from "mongoose";
import bcryptjs from "bcryptjs";

const { Schema, model } = mongoose;

interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  comparePassword(password: string): boolean;
}

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true, trim: true },
});

UserSchema.pre<UserDocument>("save", async function (next) {
  const user = this;
  try {
    if (!user.isModified("password")) return next();
    const salt = bcryptjs.genSaltSync(10);
    user.password = bcryptjs.hashSync(user.password, salt);
    next();
  } catch (error: any) {
    console.log(error);
    throw new Error("Error al registrar el usuario");
  }
});

UserSchema.methods.comparePassword = function (
  this: UserDocument,
  password: string
) {
  return bcryptjs.compareSync(password, this.password);
};

export const User = model<UserDocument>("User", UserSchema);
