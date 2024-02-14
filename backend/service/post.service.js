import { postModel } from "../models/postModel.js";

export const createPost = async (payload) => {
  const { userId, title, body } = payload.body;
  const post = new postModel({ userId, title, body }).save();
  return { post };
};

export const getPostPaginated = async (page) => {
  let resultsPerPage = 10;
  return postModel
    .find({})
    .sort({ createdAt: "descending" })
    .lean()
    .limit(resultsPerPage)
    .skip(page * resultsPerPage);
};

export const getPost = async (payload) => {
  const post = postModel.findById(payload.params);
  return { post };
};
export const deletePost = async (payload) => {
  const data = postModel.findByIdAndDelete(payload.params);
  return { data };
};

export const updatePost = async (payload) => {
  let data = postModel.findByIdAndUpdate(payload.params, {
    $set: payload.body,
  });
  return { data };
};

export const post_Service = {
  createPost,
  getPostPaginated,
  getPost,
  deletePost,
  updatePost,
};
