import express from "express";
import { logIn, logOut, signUp } from "../controllers/authController";

const router = express.Router();

router.post("/login", logIn);
router.post("/logout", logOut);
router.post("/register", signUp);

export default router;