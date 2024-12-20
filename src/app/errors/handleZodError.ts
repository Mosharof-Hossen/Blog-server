import { ZodError, ZodIssue } from "zod";
import { TErrorSource, TReturnErrorResponse } from "../interface/error";

const handleZodError = (err: ZodError): TReturnErrorResponse => {

    const errorSource: TErrorSource = err.issues.map((issue: ZodIssue) => {
        return {
            path: issue?.path[issue?.path.length - 1],
            message: issue?.message
        }
    })

    return {
        message: "Validation Error",
        statusCode: 400,
        errorSource
    }
}

export default handleZodError;