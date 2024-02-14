import { postModel } from "../models/postModel.js";

export const createPost = async (payload) => {
  try{

  }
  catch(error){
    throw 
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
