import AppError from "../../errors/AppError";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { User } from "../register/register.model";
import { Blog } from "./blog.model";
import { BlogServices } from "./blog.services";

const createBlog = catchAsync(async (req, res) => {
    const user = await User.isUserExistByEmail(req.user.userEmail);
    if (!user) {
        throw new AppError(401, "Invalid User!");
    }
    const payload = req.body;
    payload.author = user?._id;
    const result = await BlogServices.createBlogIntoDB(payload);

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

const updateBlog = catchAsync(async (req, res) => {
    const user = await User.isUserExistByEmail(req.user.userEmail);

    if (!user) {
        throw new AppError(401, "Invalid User!");
    }
    const blog = await Blog.findById(req.params.id).populate("author");

    if (blog?.author?.email != user?.email) {
        throw new AppError(401, "Invalid User!");
    }
    const result = await BlogServices.updateBlogIntoDB(req.params.id, req.body);

    sendResponse(res, {
        success: true,
        message: "Blog updated successfully",
        statusCode: 200,
        data: {
            "_id": result?._id,
            "title": result?.title,
            "content": result?.content,
            "author": result?.author
        }
    })
})

const deleteBlog = catchAsync(async (req, res) => {
    const user = await User.isUserExistByEmail(req.user.userEmail);

    if (!user) {
        throw new AppError(401, "Invalid User!");
    }
    const blog = await Blog.findById(req.params.id).populate("author");

    if (blog?.author?.email != user?.email) {
        throw new AppError(401, "Invalid User!");
    }
    await BlogServices.deleteBlogFromDB(req.params.id);

    res.status(200).json({
        "success": true,
        "message": "Blog deleted successfully",
        "statusCode": 200
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
    getAllBlogs,
    updateBlog,
    deleteBlog
}