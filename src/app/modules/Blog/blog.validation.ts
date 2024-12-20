import { z } from "zod";

const blogValidationSchema = z.object({
    body: z.object({
        title: z.string().min(1, "Title is required"),
        content: z.string().min(1, "Content is required"),
        // author: z.string().min(1, "Author is required"),
    })
});

export const BlogValidation = {
    blogValidationSchema
};
