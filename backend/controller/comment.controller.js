import { commentService } from "../service/index.js";
import { handle_error } from "../lib/utils.js";

const createComment = async (req, res) => {
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
const deleteComment = async (req, res) => {
  try {
    const response = await commentService.deleteComment(req);
    res.status(200).send({
      success: true,
      message: "new comment deleted successfully",
      comment: response.comment,
    });
  } catch (error) {
    // handle_error(req, error);
    console.log("deleteComment", error);
    return res.status(error.code || 500).send(error.message || error);
  }
};
const fetchComment = async (req, res) => {
  try {
    const response = await commentService.fetchComment();
    console.log(response.comment)
    return response.comment 
     res.status(200).json(response.comment);
  } catch (error) {
    res.status(error.code || 404).json({ message: error.message });
  }
};
const updateComment = async (req, res) => {
  try {
    const response = await commentService.updateComment(req);
    console.log(req.body);
    res.status(200).json({
      success: true,
      data: response.data,
    });
  } catch (error) {
    res.status(error.code || 500).json({
      success: false,
      message: error.message,
    });
  }
};
const getAllcomments = async (req, res) => {
  let page = req.query.page; //starts from 0
  let comments = await commentService.getCommentPaginated(page);
  if (comments && comments.length > 0) {
    res.json(comments);
  } else {
    res.json("comments not found");
  }
};

const commentController = {
  getAllcomments,
  updateComment,
  deleteComment,
  createComment,
  fetchComment,
};
export default commentController;
