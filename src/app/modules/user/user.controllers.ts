import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse";
import { UserServices } from "./user.services"

const registerUser = catchAsync(async (req, res) => {
    const result = await UserServices.registerUserIntoDB(req.body);

    sendResponse(res, {
        success: true,
        message: "User Registered Successfully.",
        statusCode: 201,
        data: {
            _id: result._id,
            name: result.name,
            email: result.email
        }
    })
})

export const UserControllers = {
    registerUser
}