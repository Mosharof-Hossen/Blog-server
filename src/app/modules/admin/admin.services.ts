import { Blog } from "../Blog/blog.model";
import { User } from "../register/register.model"

const blockUserIntoDB = async (userId: string) => {
    const result = await User.findByIdAndUpdate(userId, { isBlocked: true });
    return result;
}
const deleteBlogFromDB = async (id: string) => {
    const result = await Blog.findByIdAndDelete(id);
    return result;
}

export const AdminServices = {
    blockUserIntoDB,
    deleteBlogFromDB
}