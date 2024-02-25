import { postModel } from "../models/postModel.js";

export const createPost = async (payload) => {
  try {
    const files = payload.files;
    // console.log(files)

    // const image1=files[0]?.path;
    // const image2=files[1]?.path;
    // const image3=files[2]?.path;
    // const image4=files[3]?.path;
    let images = [];
    files?.map((i) => {
      images.push(i.path);
      console.log(i.path);
    });
    // console.log("images",images)
    const { userId, title } = payload.body;
    if (!userId && !title) {
      console.log("userid or title not found");
    }
    const newPostData = {
      // userid: payload.body.userid,
      title: payload.body.title,
      image: images,
    };
    // console.log("new post",newPostData)

    // handle validations here

    const post = await new postModel(newPostData).save();
    console.log("post", post);
    // return res.json({images:req})
    return post;
    // return { post,newImages:images };
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getPostPaginated = async (payload) => {
  let page = Number(payload.params) || 0;
  if (!page || page.trim() === "") {
    page = 0;
  }
  let resultsPerPage = 10;
  const posts = await postModel
    .find({})
    .sort({ createdAt: "descending" })
    .lean()
    .limit(resultsPerPage)
    .skip(page * resultsPerPage);

  return { posts };
};

export const getPost = async (payload) => {
  const post = postModel.findById(payload.params);
  return { post };
};

export const deletePost = async (payload) => {
  const { id } = payload.params;
  const data = postModel.findByIdAndDelete({ _id: id });
  return data;
};

const updatePost = async (payload) => {
  console.log(payload.params.id);
  console.log(payload.body);
  const data = postModel.findByIdAndUpdate(
    { _id: payload.params.id },
    {
      $set: payload.body,
    }
  );
  console.log(data);
  return {};
};

export const postService = {
  createPost,
  getPostPaginated,
  getPost,
  deletePost,
  updatePost,
};
