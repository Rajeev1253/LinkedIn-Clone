import express from "express";
import { createPost, deletePost, getAllPost, getPost, likeUnlikePost, updatePost } from "../controller/postController.js";
import {  requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/create",requireSignIn,createPost);
router.post("/:id",requireSignIn,likeUnlikePost);
router.get("/posts",requireSignIn,getAllPost)
router.get("/:id",requireSignIn,getPost)
router.delete("/:id",requireSignIn,deletePost)
router.put("/:id",requireSignIn,updatePost)

export default router;



