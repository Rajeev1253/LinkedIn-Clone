import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userModel",
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    public_id: String,
    url: String,
  },

  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
export const postModel = mongoose.model("post", postSchema);
