import express from "express";
import { createPost, deletePost, getPost, likeUnlikePost, updatePost,getAllUsers } from "../controller/postController.js";
import {  requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/create",requireSignIn,createPost);
router.post("/:id",requireSignIn,likeUnlikePost);
router.get("/posts",requireSignIn, getAllUsers)
router.get("/:id",requireSignIn,getPost)
router.delete("/:id",requireSignIn,deletePost)
router.put("/:id",requireSignIn,updatePost)

export default router;



