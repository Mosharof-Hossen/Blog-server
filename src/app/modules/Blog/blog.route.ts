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
    dataValidator(BlogValidation.createBlogValidationSchema),
    blogController.createBlog);
router.patch(
    "/:id",
    auth(ROLES.user),
    dataValidator(BlogValidation.updateBlogValidationSchema),
    blogController.updateBlog);


router.get("/", blogController.getAllBlogs);


export const BlogRouter = router;