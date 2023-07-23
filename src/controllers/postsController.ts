import { Response } from 'express';
import Request from '../interfaces/Request'
import Post from '../models/Post'

const getAllPosts = async (req: Request, res: Response) => {
    try {
        const posts = await Post.findAll();
        res.status(200).json({ posts });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export { getAllPosts }