import { postModel } from "../models/postModel.js";
import { userModel } from "../models/userModel.js";
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
    const user = await userModel.findById(userId);
    user.posts.unshift(post._id);
    await user.save();

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
      const index = post.likes.indexof(req.user._id);
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
