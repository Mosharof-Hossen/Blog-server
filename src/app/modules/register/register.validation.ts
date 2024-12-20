import { z } from "zod";

const registerUserValidationSchema = z.object({
    body: z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email format").min(1, "Email is required"),
        password: z.string().min(1, "Password is required"),
    })
});

export const UserValidation = {
    registerUserValidationSchema
};
