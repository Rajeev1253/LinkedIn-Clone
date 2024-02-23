import { commentModel } from "../models/commentModel.js";

export const createComment = async (payload) => {
  const { userId, postId, body } = payload.body;
  if (!body) {
    throw Object.assign(new Error("body is required"), { code: 400 });
  }
  const comment = await new commentModel({ userId, postId, body }).save();
  return { comment };
};
export const deleteComment = async (payload) => {
  const { userId } = payload.body;
  const comment =await commentModel.deleteOne({ _id: payload.params.id, userId });
  return comment;
};
export const fetchComment = async (payload) => {
  // console.log(payload.params)
  const postId = payload.params
  console.log(postId)
  const comment = await commentModel.findById({postId});
  return comment;
};
export const updateComment = async (payload) => {
  let data = await commentModel.findByIdAndUpdate(payload.params, {
    $set: payload.body,
  });
  return { data };
};
export const getCommentPaginated = async (page) => {
  let resultsPerPage = 1;

  return await commentModel
    .find({})
    .sort({ createdAt: "descending" })
    .lean()
    .limit(resultsPerPage)
    .skip(page * resultsPerPage);
};

const commentService = {
  createComment,
  deleteComment,
  fetchComment,
  updateComment,
  getCommentPaginated,
};

export default commentService;
