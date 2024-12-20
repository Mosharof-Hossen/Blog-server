import mongoose from "mongoose";
import { TErrorSource, TReturnErrorResponse } from "../interface/error";

const handleValidationError = (
    err: mongoose.Error.ValidationError
): TReturnErrorResponse => {

    const errorSource: TErrorSource = Object.values(err.errors).map(
        (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
            return {
                path: val?.path,
                message: val?.message
            }
        }
    )

    return {
        message: "Validation Error",
        statusCode: 400,
        errorSource
    }
}

export default handleValidationError;