import { Router } from "express";
import { UserControllers } from "./register.controllers";
import dataValidator from "../../middlewares/dataValidator";
import { UserValidation } from "./register.validation";

const router = Router();

router.post(
    "/register",
    dataValidator(UserValidation.registerUserValidationSchema),
    UserControllers.registerUser
);


export const RegisterRouter = router;