import { Router } from "express";
import { UserControllers } from "./user.controllers";

const router = Router();

router.post("/register", UserControllers.createUser);


export const UserRouter = router;