import { z } from "zod";

const userLoginValidationSchema = z.object({
    body: z.object({
        email: z.string().email("Invalid email format").min(1, "Email is required"),
        password: z.string().min(1, "Password is required"),
    })
});

export const LoginDataValidation = {
    userLoginValidationSchema
}