import { Router } from "express";
import { authController } from "./auth.controller";
import dataValidator from "../../middlewares/dataValidator";
import { LoginDataValidation } from "./auth.validation";

const router = Router();

router.post(
    "/login",
    dataValidator(LoginDataValidation.userLoginValidationSchema),
    authController.loginUser)


export const AuthRouter = router;