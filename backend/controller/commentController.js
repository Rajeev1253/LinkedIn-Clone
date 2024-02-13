import { commentModel } from "../models/commentModel.js";
import { userModel } from "../models/userModel.js";

export const createComment = async (req, res) => {
    try {
      const { userId, postId, body } = req.body;
    //   if (!title) {
    //     return res.status(401).send({ message: "title is required" });
    //   }
      if (!body) {
        return res.status(401).send({ message: "body is required" });
      }
  
      const comment = await new commentModel({userId,postId,body }).save();
  
      res.status(201).send({
        success: true,
        message: "new comment created successfully",
        comment
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        Message: "Error in comment",
        error,
      });
    }
  };
  export const deleteComment = async(req,res)=>{
    const id = req.params.id;
    const { postId } = req.body;
    const {userId}=req.body;
    try{
        const comment = await commentModel.findById(id);
        if (comment.postId.toString() === postId && comment.userId.toString() === userId){
          await comment.deleteOne();
          res.status(200).json("Post deleted successfully");
        } else {
          res.status(403).json("Action forbidden");
        }
    }
    catch(error){
        res.status(500).send({
            success:false,
            message:"error in deleting file"
        })
    }
}
export const getAllComment = async(req,res)=>{
  try{
      const comment = await  commentModel.find().populate("");
              
      res.status(200).json(comment);

  }
  catch(error){
      res.status(404).json({ message: error.message });
  }
}
export const getOne = async(req,res)=>{
  const id = req.params.id
  try{
      const comment = await  commentModel.findById(id);
              
      res.status(200).json(comment);

  }
  catch(error){
      res.status(404).json({ message: "comment not found",error});
  }
}
export const updateComment = async(req,res)=>{
  try{
      const comment = await commentModel.findByIdAndUpdate
  (
      req.params,{
          $set:req.body
      }
  );
  console.log(req.body)
  res.send(comment);
}
catch(error){
  res.status(500).json({
    success:false,
    message:error.message,
  })
}
}