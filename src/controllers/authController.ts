import { Response } from 'express';
import Request from '../interfaces/Request'
import UserModel from '../models/User'
const User = UserModel.model;
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { loginValidator, registerValidator } from '../validators/userValidators';

const signUp = async (req: Request, res: Response) => {
    try {
        try {
            await registerValidator.validateAsync(req.body);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 16);
        if (0 < await User.count({ where: { email: req.body.email } }))
            return res.status(409).json({ error: 'Email already exists' });
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword,
            roleId: req.body.roleId
        });
        const { password, ...userResponse } = user.toJSON();
        res.status(201).json({
            message: 'User created successfully',
            user: userResponse
        });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

const logIn = async (req: Request, res: Response) => {
    try {
        const results = loginValidator.validate(req.body);
        if (results.error) return res.status(400).json({ error: results.error.message });
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if (!user) 
            return res.status(404).json({ error: 'User not found' });
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch)
            return res.status(401).json({ error: 'Invalid Credentials' });
        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1d' });
        res.cookie('jwt-token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 });
        res.status(200).json({ 
            message: 'Logged in successfully',
            user
        });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

const logOut = async (req: Request, res: Response) => {
    try {
        res.clearCookie('jwt-token');
        res.status(200).json({ message: 'Logged out successfully' });
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}

export { logIn, logOut, signUp }