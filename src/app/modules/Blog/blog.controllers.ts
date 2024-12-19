import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.services";

const createBlog = catchAsync(async (req, res) => {
    const result = await BlogServices.createBlogIntoDB(req.body);

    sendResponse(res, {
        success: true,
        message:  "Blog created successfully",
        statusCode: 201,
        data: {
            "_id": result._id,
            "title": result.title,
            "content": result.content,
            "author": result.author
        }
    })
})

export const blogController = {
    createBlog
}