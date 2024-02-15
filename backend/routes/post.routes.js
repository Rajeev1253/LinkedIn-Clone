import express from "express";
import { postController } from "../controller/index.js";
import { requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/", requireSignIn, postController.createPost);
router.get("/", requireSignIn, postController.getAllPost);
router.delete("/:id", requireSignIn, postController.deletePost);
router.put("/:id", requireSignIn, postController.updatePost);

export default router;
