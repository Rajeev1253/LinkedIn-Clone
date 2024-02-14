import express from "express";
import { registerController,loginController } from "../controller/authController.js";
const router = express.Router();

router.post("/register", registerController);
router.get("/login",loginController)

export default router;



