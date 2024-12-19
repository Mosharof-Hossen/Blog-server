import { Router } from "express";
import { UserRouter } from "../modules/user/user.route";

const router = Router();

const moduleRouters = [
    {
        path: "/auth",
        route: UserRouter
    }
];

moduleRouters.forEach((route) => router.use(route.path, route.route));


export default router;
