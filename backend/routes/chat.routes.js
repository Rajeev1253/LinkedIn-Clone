import express from "express";
import { requireSignIn } from "../middleware/authMiddleware.js";
import { createChat } from "../controller/chat.controller.js";
const router = express.Router();

router.post("/", requireSignIn, createChat);

export default router;
