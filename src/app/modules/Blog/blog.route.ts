import { Router } from "express";
import { blogController } from "./blog.controllers";

const router = Router();

router.post("/", blogController.createBlog);
router.get("/", blogController.getAllBlogs);


export const BlogRouter = router;