import { Router } from "express";
import { RegisterRouter } from "../app/modules/register/register.route";
import { BlogRouter } from "../app/modules/Blog/blog.route";
import { AuthRouter } from "../app/modules/auth/auth.route";
import { AdminRouter } from "../app/modules/admin/admin.route";

const router = Router();

const moduleRouters = [
    {
        path: "/auth",
        route: RegisterRouter
    },
    {
        path: "/auth",
        route: AuthRouter
    },
    {
        path: "/blogs",
        route: BlogRouter
    },
    {
        path: "/admin",
        route: AdminRouter
    },
];

moduleRouters.forEach((route) => router.use(route.path, route.route));


export default router;
