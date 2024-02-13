import { postModel } from "../models/postModel.js";
import { getUsersPaginated } from "../service/UserService.js";

export const createPost = async (req, res) => {
  try {
    const { userId, title, body } = req.body;
    if (!title) {
      return res.status(401).send({ message: "title is required" });
    }
    if (!body) {
      return res.status(401).send({ message: "body is required" });
    }

    const post = await new postModel({ userId, title, body }).save();

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

export const likeUnlikePost = async (req, res) => {
  try {
    
    const post = await postModel.findById(req.params.id);
    if(!post){
        return res.status(404).send({
            success:false,
            message:"Post not found"

        })
    }
    if (post.likes.includes(req.user._id)) {
      const index = post.likes.indexOf(req.user._id);
      post.likes.splice(index, 1);
      await post.save();
      return res.status(200).send({
        message: "post unliked successfully",
        success: true
      });
    }
    else{

        post.likes.push(req.user._id);
        await post.save()
        return res.status(200).send({
            message:"post liked successfully",
            success:true
        })
    }
  } catch (error) {
    console.log(error);
    req.status(500).send({
      success: false,
      message: "error in like & unlike",
      error,
    });
  }
};
// export const getAllPost = async(req,res)=>{
//     try{
//         const post = await  postModel.find();
                
//         res.status(200).json(post);

//     }
//     catch(error){
//         res.status(404).json({ message: error.message });
//     }
// }

export const getAllUsers= async(req, res)=> {
  let page = req.query.page //starts from 0
  let users= await UserService.getUsersPaginated(page)
  if (users && users.length > 0) {
    res.json(users)
  } else {
    res.json("users not found")
  }
}
export const getPost = async(req,res)=>{
    const id = req.params.id
    try{
        const post = await  postModel.findById(id);
                
        res.status(200).json(post);

    }
    catch(error){
        res.status(404).json({ message: "post not found",error});
    }
}
export const deletePost = async(req,res)=>{
    const id = req.params.id;
    const { userId } = req.body;
    console.log(id,userId)
    try{
        const post = await postModel.findById(id);  
        if (post.userId.toString() === userId) {
          await post.deleteOne();
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
export const updatePost = async(req,res)=>{
  try{
    const post = await postModel.findByIdAndUpdate
  (
      req.params,{
          $set:req.body
      }
  );
  console.log(post)
  res.send(post);
}
catch(error){
  res.status(500).json({
    success:false,
    message:error.message,
  })
}
}
