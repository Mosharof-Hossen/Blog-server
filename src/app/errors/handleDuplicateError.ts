import { TErrorSource, TReturnErrorResponse } from "../interface/error";

const handleDuplicateError = (err): TReturnErrorResponse => {
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