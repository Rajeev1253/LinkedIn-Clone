import { commentModel } from "../models/commentModel.js";

export const createComment = async(payload)=>{
    try{
        const { userId, postId, body } = payload.body;
      if (!body) {
        return res.status(401).send({ message: "body is required" });
      }
      const comment = await new commentModel({userId,postId,body }).save();
      return{comment}
    }
    catch(error){
        console.log(error)
    }
}
export const deleteComment = async(req,res)=>{
    try{
        const id = req.params.id;
        const {userId}=req.body;   
        const comment = await commentModel.findById(id);
        if (comment.userId.toString() === userId){
          await comment.deleteOne();
          res.status(200).json("comment deleted successfully");
        } else {
          res.status(403).json("Action forbidden");
        }
    }
    catch(error){

    }
}
export const fetchComment = async(req,res)=>{
    try{
        const comment = await  commentModel.find();    
       
        res.status(200).json("all comment");    
        return comment
    }
    catch(error){

    }
}
export const updateComment = async (payload) => {
    try {
      let data = await commentModel.findByIdAndUpdate
        (
          payload.params, {
          $set: payload.body
        }
        );
      return { data };
    }
    catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      })
    }
  
  }
export const getCommentPaginated = async (page) => {
    let resultsPerPage = 1
  
    return await commentModel.find({})
      .sort({ createdAt: 'descending' })
      .lean()
      .limit(resultsPerPage)
      .skip(page * resultsPerPage)
  }
  
export const commentService ={
    createComment,
    deleteComment,
    fetchComment,
    updateComment
   
  }