import express from "express";
import { getAllPosts } from "../controllers/postsController";
import authMiddleware from "../middleware/authMiddleware";

const router = express.Router();

router.use(authMiddleware).get("/posts", getAllPosts);

export default router;