import express from "express";
import { createBlog, deleteBlog, editBlog, getAllBlog, getSingleBlog } from "../controller/blogController.js";
import { authenticate } from "../auth/verifyToken.js";

const router = express.Router()

router.post("/createblog", authenticate, createBlog)
router.put("/editblog/:id",authenticate,editBlog)
router.delete("/deleteblog/:id", authenticate, deleteBlog);
router.get("/getallblog",getAllBlog);
router.get("/getsingleblog/:id",getSingleBlog)

export default router;