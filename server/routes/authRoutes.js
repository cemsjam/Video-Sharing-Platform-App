import express from "express";
import { signup } from "../controllers/authController.js";
const router = express.Router();

//CREATE USER
router.post("/signup", signup);

//SIGN IN
router.post("/signin");

//GOOGLE AUTH
router.post("/google");

export default router;
