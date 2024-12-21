/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorSource, TReturnErrorResponse } from "../interface/error";

const handleDuplicateError = (err:any): TReturnErrorResponse => {
    const errorSource: TErrorSource = [
        {
            path: "",
            message: err?.errorResponse?.errmsg,
        }
    ]

    return {
        message: "Validation Error",
        statusCode: 400,
        errorSource
    }
}

export default handleDuplicateError;