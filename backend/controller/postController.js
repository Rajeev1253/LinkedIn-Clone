import { post_Service } from "../service/post.service.js";
import { handle_error } from "../lib/utils.js";


export const createPost = async (req, res) => {
  try {
    const response = post_Service.createPost(req);
    res.status(201).send({
      success: true,
      message: "new post created successfully",
      post:response.post
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
export const getAllPost = async (req, res) => {
  let page = req.query.page; //starts from 0
  let users = await post_Service.getPostPaginated(page);
  if (users && users.length > 0) {
    res.json(users);
  } else {
    res.json("users not found");
  }
};

export const getPost = async (req, res) => {
  try {
    const response = await post_Service.getPost(req)
    res.status(200).json(response.post);
  } catch (error) {
    res.status(404).json({ message: "post not found", error });
  }
};
export const deletePost = async(req,res)=>{
  try{
    const response = await post_Service.deletePost(req);
    return res.status(200).send({
      success: true,
      message: "post deleted",
      data: response.data,
    });
  }
  catch (error) {
    handle_error(res,error);
  }}
  
  export const updatePost = async(req,res)=>{
    try{
      const response = await post_Service.updatePost(req);
      console.log(response.data)
      res.send(response.data);
}catch(error){
    res.status(500).json({
      success:false,
      message:error.message,
    })
  }

}