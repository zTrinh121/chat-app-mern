import express from "express";
import { login, logout, singup } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/signup", singup);

router.post("/login", login);

router.post("/logout", logout);

export default router;