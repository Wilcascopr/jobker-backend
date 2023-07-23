import { Request } from "express";
import User from "../models/User";

interface RequestWithUser extends Request {
    user?: typeof User.prototype;
}

export default RequestWithUser;