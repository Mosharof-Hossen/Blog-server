import { Router } from "express";
import { blogController } from "./blog.controllers";

const router = Router();

router.post("/", blogController.createBlog);


export const BlogRouter = router;