import express from "express";
import commentController from "../controller/comment.controller.js";
import { requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/", requireSignIn, commentController.createComment);
router.delete("/:id", requireSignIn, commentController.deleteComment);
router.get("/:id", requireSignIn, commentController.fetchComment);
router.put("/:id", requireSignIn, commentController.updateComment);

export default router;
