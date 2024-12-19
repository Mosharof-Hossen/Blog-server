import { Router } from "express";
import { UserControllers } from "./user.controllers";
import dataValidator from "../../middlewares/dataValidator";
import { UserValidation } from "./user.validation";

const router = Router();

router.post(
    "/register",
    dataValidator(UserValidation.registerUserValidationSchema),
    UserControllers.registerUser
);


export const UserRouter = router;