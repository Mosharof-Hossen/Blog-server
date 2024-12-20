import mongoose from "mongoose";
import { TErrorSource, TReturnErrorResponse } from "../interface/error";

const handleCastError = (
    err: mongoose.Error.CastError
): TReturnErrorResponse => {
    const errorSource: TErrorSource = [
        {
            path: err?.path,
            message: err?.message
        }
    ]

    return {
        message: "Validation Error",
        statusCode: 400,
        errorSource
    }
}

export default handleCastError;