import { TUser } from "./register.interface";
import { User } from "./register.model";

const registerUserIntoDB = async (payload: TUser) => {
    const result = await User.create(payload);
    return result;
}

export const UserServices = {
    registerUserIntoDB,
}