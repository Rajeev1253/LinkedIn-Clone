import express from  'express';
import userRoutes from './user.routes.js'
import postRoutes from './post.routes.js'
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to mern app" });
});

router.use("/users", userRoutes);
router.use("/posts",postRoutes)

export default router;