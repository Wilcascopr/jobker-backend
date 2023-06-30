import { Request } from "express";
import UserModel from "../models/User";
const User = UserModel.model;

interface RequestWithUser extends Request {
    user?: typeof User.prototype;
}

export default RequestWithUser;