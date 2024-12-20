import { Model } from "mongoose";
export type TUserRoles = "admin" | "user";
export interface TUser {
    name: string;
    email: string;
    password: string;
    role: TUserRoles;
    isBlocked: boolean;
}

export interface UserModel extends Model<TUser, UserModel> {
    isUserExistByEmail(email: string): Promise<TUser>;
}