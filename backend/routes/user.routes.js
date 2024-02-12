import express from "express";
import {
    loginController,
  registerController,
} from "../controller/authController.js"
import {  requireSignIn } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/register", registerController);
router.get("/login",loginController)

//private route
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({
    ok: true,
  });
});
export default router;



