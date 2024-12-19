import catchAsync from "../../utils/catchAsync";
import { BlogServices } from "./blog.services";

const createBlog = catchAsync(async (req, res) => {
    const return = await BlogServices.createBlogIntoDB(req.body);
})

export const blogController = {
    createBlog
}