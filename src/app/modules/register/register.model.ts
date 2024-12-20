import { model, Schema } from "mongoose";
import { TUser, UserModel } from "./register.interface";
import { hash } from "bcrypt";
import config from "../../../config";

const userModelSchema = new Schema<TUser, UserModel>({
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

userModelSchema.statics.isUserExistByEmail = async function (email: string) {
    return await User.findOne({ email }).select("+password");
}

export const User = model<TUser, UserModel>('User', userModelSchema);