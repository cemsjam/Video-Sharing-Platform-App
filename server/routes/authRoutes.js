import express from "express";
import { signin, signup, googleAuth } from "../controllers/authController.js";
const router = express.Router();

//CREATE USER
router.post("/signup", signup);

//SIGN IN
router.post("/signin", signin);

//GOOGLE AUTH
router.post("/google", googleAuth);

export default router;
