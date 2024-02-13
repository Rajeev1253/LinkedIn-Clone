import express from 'express';
import { createComment, deleteComment, getAllComment, getOne, updateComment } from '../controller/commentController.js';
import { requireSignIn } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post("/",requireSignIn,createComment);
router.delete("/:id",requireSignIn,deleteComment)
router.get("/",requireSignIn,getAllComment)
router.get("/:id",requireSignIn,getOne)
router.put("/:id",requireSignIn,updateComment)

export default router;