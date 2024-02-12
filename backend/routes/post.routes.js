import express from "express";
import { createPost, likeUnlikePost } from "../controller/postController.js";
import {  requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/create",requireSignIn,createPost);
router.post("/post/:id",requireSignIn,likeUnlikePost)
export default router;



