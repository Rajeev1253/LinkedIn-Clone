import { postModel } from "../models/postModel.js";

export const createPost = async (payload) => {
  const { userId, title, body } = payload.body;
  const post = new postModel({ userId, title, body }).save();
  return { post };
};

export const getPostPaginated = async (payload) => {
  const page= payload.params
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
  console.log(payload.params.id)
  const data = postModel.findByIdAndDelete({_id: payload.params.id});
  // console.log(data)
  return  data ;
};

export const updatePost = async (payload) => {
  const data = postModel.findByIdAndUpdate({_id: payload.params.id}, {
    $set: payload.body,
  });
  console.log(data)
  return data;
};

export const post_Service = {
  createPost,
  getPostPaginated,
  getPost,
  deletePost,
  updatePost,
};
