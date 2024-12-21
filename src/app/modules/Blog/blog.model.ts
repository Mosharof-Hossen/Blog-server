import { model, Schema } from "mongoose";
import { TBlog } from "./blog.interface";

const blogModelSchema = new Schema<TBlog>({
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    isPublished: { type: Boolean, default: true }
}, {
    timestamps: true
})

blogModelSchema.pre("find", async function (next) {
    this.find({ isPublished: true });
    next()
})


export const Blog = model<TBlog>("Blog", blogModelSchema)
