import express from "express";
import { createPost } from "../controller/postController.js";
import {  requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/create",requireSignIn,createPost);
export default router;



