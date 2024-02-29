import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    // required: true,
  },
  lastName: {
    type: String,
  },
  additionalName: {
    type: String,
  },
  avatar: {
    public_id: String,
    url: String,
  },
  username: {
    type: String,
    default: "ABCD",
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    country: {
      type: String,
      default: "ABC",
      // required:true
    },
    city: {
      type: String,
      default: "ABC",
      // required:true
    },
  },
  phone: {
    type: String,
    default: "ABC",
    // required:true,
  },
  website: {
    type: String,
    default: "ABC",
    // required:true,
  },
  company: {
    industry: {
      type: String,
      default: "ABC",
      // required:true
    },
  },
  password: {
    type: String,
    required: true,
  },
});
export const userModel = mongoose.model("user", userSchema);
