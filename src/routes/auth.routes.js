import { Router } from "express";
import { login, verify } from "../controller/auth.controller.js";

const router = Router()

router.post('/login', login)
app.get('/verify', verify)

export default router 