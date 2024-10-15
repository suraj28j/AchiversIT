import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controller/userController.js';
import { authenticate, restrict } from '../auth/verifyToken.js';
const router = express.Router();

router.put("/:id", authenticate, updateUser);
router.delete("/:id", authenticate, deleteUser);
router.get("/getalluser", authenticate, restrict(["admin"]), getAllUser)
router.get("/profile/me", authenticate, restrict(["user"]), getSingleUser)


export default router