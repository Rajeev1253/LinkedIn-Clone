import { postModel } from "../models/postModel.js";

export const createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    if (!title) {
      return res.status(401).send({ message: "title is required" });
    }
    if (!body) {
      return res.status(401).send({ message: "body is required" });
    }
    const post = await new postModel({ title, body }).save();
    res.status(201).send({
      success: true,
      message: "new post created successfully",
      post,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      Message: "Error in post",
      error,
    });
  }
};
