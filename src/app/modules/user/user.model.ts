import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";

const userModelSchema = new Schema<TUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
})

export const User = model<TUser>('User', userModelSchema);