/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";

const notFound = (req: Request, res: Response, next: NextFunction) => {
    res.status(400).json({
        success: false,
        message: "Api Not Found.",
        statusCode: 400,
        error: { details: {} },
    })
}

export default notFound;