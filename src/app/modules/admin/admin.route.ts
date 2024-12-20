import { Router } from "express";
import auth from "../../middlewares/auth";
import { ROLES } from "../Blog/blog.constant";
import { AdminControllers } from "./admin.controllers";

const router = Router();

router.patch(
    "/users/:userId/block",
    auth(ROLES.admin),
    AdminControllers.blockUser
)

router.delete(
    "/blogs/:id",
    auth(ROLES.admin),
    AdminControllers.deleteBlog
)


export const AdminRouter = router;