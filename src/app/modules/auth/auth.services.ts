import { compare } from "bcrypt";
import AppError from "../../errors/AppError";
import { User } from "../register/register.model";
import { TLogin } from "./auth.interface"
import jwt from 'jsonwebtoken'
import config from "../../../config";

const loginUser = async (payload: TLogin) => {
    const user = await User.isUserExistByEmail(payload.email);
    if (!user) {
        throw new AppError(400, "Invalid credentials");
    }
    if (user.isBlocked) {
        throw new AppError(400, "You are Blocked");
    }
    const isPasswordMatched = await compare(payload.password, user.password);
    if (!isPasswordMatched) {
        throw new AppError(400, "Invalid credentials");
    }

    const jwtPayload = {
        userEmail: user.email,
        role: user.role
    }
    const accessToken = jwt.sign(jwtPayload, config.jwt_Access_secret as string, { expiresIn: "30d" });

    return accessToken
}

export const authServices = {
    loginUser
}