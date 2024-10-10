import express from 'express'
import { login, registerUser } from '../controller/authController.js';
import { restrict } from '../auth/verifyToken.js';

const router = express.Router();

//  http://localhost:8000/api/v1/auth/registeruser
router.post("/registeruser",restrict("user"), registerUser)
router.post('/login',login)

export default router;
