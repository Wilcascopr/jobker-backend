import { Response } from 'express';
import Request from '../interfaces/Request'
import UserModel from '../models/User'
const User = UserModel.model;
import jwt from 'jsonwebtoken';

const authMiddleware = async (req: Request, res: Response, next: any) => {
    try {
        const token = req.cookies['jwt-token'];
        if (!token) return res.status(401).json({ error: 'Unauthorized' });
        const payload: any = jwt.verify(token, process.env.JWT_SECRET as string);
        const user = await User.findByPk(payload.userId);
        if (!user) return res.status(401).json({ error: 'Unauthorized' });
        req.user = user;
        next();
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export default authMiddleware;