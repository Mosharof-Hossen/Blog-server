import { JwtPayload, verify } from "jsonwebtoken";
import AppError from "../errors/AppError";
import { TUserRoles } from "../modules/register/register.interface";
import catchAsync from "../utils/catchAsync";
import config from "../../config";
import { User } from "../modules/register/register.model";

const auth = (...requireRoles: TUserRoles[]) => {
    return catchAsync(async (req, res, next) => {
        const token = req?.headers?.authorization?.split(" ")[1];
        if (!token) {
            throw new AppError(401, "You are not authorized.")
        }
        const decode = verify(token, config.jwt_Access_secret as string) as JwtPayload;

        const user = await User.isUserExistByEmail(decode.userEmail);
        if (!user) {
            throw new AppError(401, "Invalid User!");
        }
        if (user?.isBlocked) {
            throw new AppError(401, "This user is Blocked");
        }

        if (requireRoles && !requireRoles.includes(decode?.role)) {
            throw new AppError(401, "You are not authorized.")
        }
        req.user = decode;
        next();
    })
}

export default auth;