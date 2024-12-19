import { NextFunction, Request, Response } from "express";
import config from "../../config";

const globalErrorHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let message = "Something went wrong.."
    let statusCode = 400
    // console.log(err);

    res.status(statusCode).json({
        success: false,
        message: message,
        statusCode: 400,
        error: { details: err },
        stack: config.node_env === "development" ? err?.stack : null
    })
}

export default globalErrorHandler;