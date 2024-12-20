import catchAsync from "../../utils/catchAsync";
import { AdminServices } from "./admin.services";

const blockUser = catchAsync(async (req, res) => {
    await AdminServices.blockUserIntoDB(req.params.userId);
    res.status(200).json({
        "success": true,
        "message": "User blocked successfully",
        "statusCode": 200
    })
})
const deleteBlog = catchAsync(async (req, res) => {
    await AdminServices.deleteBlogFromDB(req.params.id);
    res.status(200).json({
        "success": true,
        "message": "Blog deleted successfully",
        "statusCode": 200
    })
})

export const AdminControllers = {
    blockUser,
    deleteBlog
}