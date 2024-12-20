import AppError from "../../errors/AppError";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { User } from "../user/user.model";
import { BlogServices } from "./blog.services";

const createBlog = catchAsync(async (req, res) => {
    console.log(req.user);
    const user = await User.isUserExistByEmail(req.user.userEmail);
    console.log({user});
    if (!user) {
        throw new AppError(401, "Invalid User!");
    }
    const payload = req.body;
    payload.author = user._id;
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