import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { authServices } from "./auth.services";

const loginUser = catchAsync(async (req, res) => {
    const result = await authServices.loginUser(req.body)

    sendResponse(res, {
        success: true,
        message: "Login successful",
        statusCode: 200,
        data: {
            token: result
        }
    })
})

export const authController = {
    loginUser
}