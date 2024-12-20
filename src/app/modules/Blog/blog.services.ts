import QueryBuilder from "../../Builder/QueryBuilder";
import { TBlog } from "./blog.interface"
import { Blog } from "./blog.model"
import { searchAbleFields } from "./blog.constant";

const createBlogIntoDB = async (payload: TBlog) => {
    const result = (await Blog.create(payload)).populate("author");
    return result;
}
const deleteBlogFromDB = async (id: string) => {
    const result = await Blog.findByIdAndDelete(id);
    return result;
}

const updateBlogIntoDB = async (id: string, payload: Partial<TBlog>) => {
    const result = await Blog.findByIdAndUpdate(id, payload, { new: true }).populate("author");
    return result;
}


const getAllBlogFromDB = async (query: Record<string, unknown>) => {
    console.log(query);

    const blogQuery = new QueryBuilder(
        Blog.find().populate("author"),
        query
    )
        .search(searchAbleFields)
        .filter()
        .sort();

    const result = await blogQuery.modelQuery;
    return result;
}

export const BlogServices = {
    createBlogIntoDB,
    getAllBlogFromDB,
    updateBlogIntoDB,
    deleteBlogFromDB
}