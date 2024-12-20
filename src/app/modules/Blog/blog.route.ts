import { Router } from "express";
import { blogController } from "./blog.controllers";
import dataValidator from "../../middlewares/dataValidator";
import { BlogValidation } from "./blog.validation";
import auth from "../../middlewares/auth";
import { ROLES } from "./blog.constant";

const router = Router();

router.post(
    "/",
    auth(ROLES.user),
    dataValidator(BlogValidation.blogValidationSchema),
    blogController.createBlog);
router.get("/", blogController.getAllBlogs);


export const BlogRouter = router;