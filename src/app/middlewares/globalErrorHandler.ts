/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import config from "../../config";
import { TErrorSource } from "../interface/error";
import { ZodError } from "zod";
import handleZodError from "../errors/handleZodError";
import handleValidationError from "../errors/handleValidationError";
import handleCastError from "../errors/handleCastError";
import handleDuplicateError from "../errors/handleDuplicateError";
import AppError from "../errors/AppError";

const globalErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let message = err.message || "Something went wrong.."
    let statusCode = 400
    // console.log(err);
    let errorSource: TErrorSource = [
        {
            path: "",
            message: "Something went wrong.."
        }
    ];


    if (err instanceof ZodError) {
        const simplifiedError = handleZodError(err);
        errorSource = simplifiedError?.errorSource;
        message = simplifiedError?.message;
        statusCode = simplifiedError.statusCode;
    }
    else if (err?.name === "ValidationError") {
        const simplifiedError = handleValidationError(err);
        errorSource = simplifiedError?.errorSource;
        message = simplifiedError?.message;
        statusCode = simplifiedError.statusCode;
    }
    else if (err?.name === "CastError") {
        const simplifiedError = handleCastError(err);
        errorSource = simplifiedError?.errorSource;
        message = simplifiedError?.message;
        statusCode = simplifiedError.statusCode;
    }
    else if (err?.errorResponse?.code === 11000) {
        const simplifiedError = handleDuplicateError(err);
        errorSource = simplifiedError?.errorSource;
        message = simplifiedError?.message;
        statusCode = simplifiedError.statusCode;
    }
    else if (err instanceof AppError) {
        errorSource = [
            {
                path: "",
                message: err?.message
            }
        ];
        statusCode = err?.statusCode;
    }

    res.status(statusCode).json({
        success: false,
        message: message,
        statusCode: statusCode,
        error: {
            details: errorSource
        },
        // err: err,
        stack: config.node_env === "development" ? err?.stack : null
    })
}

/**
 
    success:
    message:
    statusCode:
    error: {
        issues: [
        {
            path:"",
            message:"",
        }
                ]
}
    stack
  
 */

export default globalErrorHandler;