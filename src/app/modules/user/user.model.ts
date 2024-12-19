import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import { hash } from "bcrypt";
import config from "../../../config";

const userModelSchema = new Schema<TUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: 0 },
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

userModelSchema.pre('save', async function (next) {
    const user = this;
    user.password = await hash(user.password, Number(config.salt_round));
    next()
})
userModelSchema.post('save', async function (doc, next) {
    doc.password = ""
    next()
})

export const User = model<TUser>('User', userModelSchema);