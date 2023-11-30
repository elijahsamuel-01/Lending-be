import { Document, Schema, model } from "mongoose";

interface iUser {
  username: string;
  email: string;
  password: string;
  avatar: string;
  verificationToken: string;
  verified: boolean | any;
}

interface iUserData extends iUser, Document {}

const userModel = new Schema<iUserData>(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    verificationToken: {
      type: String,
    },
    avatar: {
      type: String,
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default model<iUserData>("user", userModel);
