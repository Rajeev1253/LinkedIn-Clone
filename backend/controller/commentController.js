import { commentModel } from "../models/commentModel.js";
import { commentService } from "../service/comment.service.js";
import { handle_error } from "../lib/utils.js";

export const createComment = async (req, res) => {
  try {
    const response = await commentService.createComment(req);
    res.status(201).send({
      success: true,
      message: "new comment created successfully",
      comment: response.comment,
    });
  } catch (error) {
    handle_error(req, error);
  }
};
export const deleteComment = async (req, res) => {
  try {
    const response = await commentService.deleteComment(req);
    res.status(200).send({
      success: true,
      message: "new comment deleted successfully",
      comment: response.comment,
    });
  } catch (error) {
    handle_error(req, error);
  }
};
export const fetchComment = async (req, res) => {
  try {
    const response = await commentService.fetchComment(req);

    res.status(200).json(comment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const getOne = async (req, res) => {
  const id = req.params.id;
  try {
    const comment = await commentModel.findById(id);

    res.status(200).json(comment);
  } catch (error) {
    res.status(404).json({ message: "comment not found", error });
  }
};
export const updateComment = async (req, res) => {
  try {
    const response = await commentService.updateComment(req);
    console.log(req.body);
    res.status(201).json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getAllcomments = async (req, res) => {
  let page = req.query.page; //starts from 0
  let comments = await commentService.getCommentPaginated(page);
  if (comments && comments.length > 0) {
    res.json(comments);
  } else {
    res.json("comments not found");
  }
};
export default {
  getAllcomments,
  updateComment,
  fetchComment,
  createComment,
  deleteComment,
 }
