import catchAsync from "../../utils/catchAsync"

const createUser = catchAsync(async (req, res) => {
    console.log(req.body);
    throw new Error("hahahahah")
})

export const UserControllers = {
    createUser
}