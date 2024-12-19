import { Router } from "express";
import { UserRouter } from "../app/modules/user/user.route";
import { BlogRouter } from "../app/modules/Blog/blog.route";
import { AuthRouter } from "../app/modules/auth/auth.route";

const router = Router();

const moduleRouters = [
    {
        path: "/auth",
        route: UserRouter
    },
    {
        path: "/auth",
        route: AuthRouter
    },
    {
        path: "/blogs",
        route: BlogRouter
    },
];

moduleRouters.forEach((route) => router.use(route.path, route.route));


export default router;
