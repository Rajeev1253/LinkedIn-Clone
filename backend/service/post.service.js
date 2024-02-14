import { postModel } from "../models/postModel.js";


export const createPost = async (payload) => {
  try{
    const { userId, title, body } = payload.body;
    if (!title) {
      return res.status(401).send({ message: "title is required" });
    }
    if (!body) {
      return res.status(401).send({ message: "body is required" });
    }
  const post = await new postModel({ userId, title, body }).save();
  return {post}
  }
  catch(error){
    throw Object.assign(new Error(),{
      name: "SERVER_ERROR",
      message:`error in creating post`
    })
  }
};

export const getPostPaginated = async (page) => {
  let resultsPerPage = 10;
  return postModel
    .find({})
    .sort({ createdAt: "descending" })
    .lean()
    .limit(resultsPerPage)
    .skip(page * resultsPerPage);
};

export const getPost = async(payload)=>{
  try{
    const post = await postModel.findById(payload.params);
    return {post}
  }
  catch(error){
    throw Object.assign(new Error(),{
      name: "SERVER_ERROR",
      message:`error in getting post`
    })

  }
}
export const deletePost = async(payload)=>{
  try{
    const data = await postModel.findByIdAndDelete(payload.params)
      return {data};
  } catch(error) {
      throw error;
  }
}

export const updatePost = async(payload)=>{
  try{
      let data = await postModel.findByIdAndUpdate
  (
      payload.params,{
          $set:payload.body
      }
  );
return{data};
}catch(error) {
  throw error;
}
}



 export const post_Service ={
  createPost,
  getPostPaginated,
  getPost,
  deletePost,
  updatePost
}


