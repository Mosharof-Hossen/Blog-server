import { z } from "zod";

const createBlogValidationSchema = z.object({
    body: z.object({
        title: z.string().min(1, "Title is required"),
        content: z.string().min(1, "Content is required"),
        // author: z.string().min(1, "Author is required"),
    })
});
const updateBlogValidationSchema = z.object({
    body: z.object({
        title: z.string().min(1, "Title is required").optional(),
        content: z.string().min(1, "Content is required").optional(),
    })
});

export const BlogValidation = {
    createBlogValidationSchema,
    updateBlogValidationSchema
};
