import { Model } from "mongoose";

export interface TUser {
    name: string;
    email: string;
    password: string;
    role: "admin" | "user";
    isBlocked: boolean;
}

export interface UserModel extends Model<TUser,UserModel> {
    isUserExistByEmail(email: string): Promise<TUser>;
}