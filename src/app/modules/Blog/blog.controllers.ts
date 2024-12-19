import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { BlogServices } from "./blog.services";

const createBlog = catchAsync(async (req, res) => {
    const result = await BlogServices.createBlogIntoDB(req.body);

    sendResponse(res, {
        success: true,
        message: "Blog created successfully",
        statusCode: 201,
        data: {
            "_id": result._id,
            "title": result.title,
            "content": result.content,
            "author": result.author
        }
    })
})


const getAllBlogs = catchAsync(async (req, res) => {
    const result = await BlogServices.getAllBlogFromDB(req.query);

    sendResponse(res, {
        success: true,
        message: "Blogs fetched successfully",
        statusCode: 200,
        data: result
    })
})

export const blogController = {
    createBlog,
    getAllBlogs
}