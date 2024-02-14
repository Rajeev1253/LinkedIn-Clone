import express from "express";
import {
  saveReaction,
  updateReaction,
  getReactions,
  removeReaction,
} from "../service/reaction.service.js";
import { requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/", requireSignIn, saveReaction);
router.get("/", requireSignIn, getReactions);
router.delete("/:id", requireSignIn, removeReaction);
router.put("/:id", requireSignIn, updateReaction);

export default router;
