import authRoutes from './authRoutes';
import postsRoutes from './postsRoutes';
import express from 'express';

const router = express.Router();

router.use(authRoutes);
router.use(postsRoutes);

export default router;

