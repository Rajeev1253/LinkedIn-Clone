import express from "express";
import { postController } from "../controller/index.js";
import { requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/create", requireSignIn, postController.createPost);
router.get("/posts", requireSignIn, postController.getAllPost);
router.delete("/:id", requireSignIn, postController.deletePost);
router.put("/:id", requireSignIn, postController.updatePost);

export default router;
