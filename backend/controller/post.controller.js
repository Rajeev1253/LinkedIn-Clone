import { post_Service } from "../service/post.service.js";
import { handle_error } from "../lib/utils.js";

export const createPost = async (req, res) => {
  try {
    const response = post_Service.createPost(req);
    res.status(201).send({
      success: true,
      message: "new post created successfully",
      post: response.post,
    });
  } catch (error) {
    console.log("create post",error);
    handle_error(res,error)
  }
};
export const getAllPost = async (req, res) => {
  // let page = req.query.page; //starts from 0
  let users = await post_Service.getPostPaginated(req);
  if (users && users.length > 0) {
    res.status(200).json(users);
  } else {
    res.status(404).json("users not found");
  }
};

export const getPost = async (req, res) => {
  try {
    const response = await post_Service.getPost(req);
    res.status(200).json(response.post);
  } catch (error) {
    handle_error(res,error)
  }
};
export const deletePost = async (req, res) => {
  try {
    const response = await post_Service.deletePost(req);
     console.log(response)
    return res.status(200).send({
      success: true,
      message: "post deleted",
      data: response.data,
    });
  } catch (error) {
    handle_error(res, error);
  }
};

export const updatePost = async (req, res) => {
  try {
    const response = await post_Service.updatePost(req);
    console.log(response.data);
    return res.send(response.data);
  } catch (error) {
    handle_error(res, error);
  }
};

export default {
  updatePost,
  deletePost,
  createPost,
  getAllPost,
};
