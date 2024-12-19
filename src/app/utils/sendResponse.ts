import { Response } from "express";

const sendResponse = <T>(
    res: Response,
    payload: {
        success: boolean,
        message: string,
        statusCode: number,
        data: T
    }
) => {
    res.status(payload.statusCode).json({
        success: payload.success,
        message: payload.message,
        statusCode: payload.statusCode,
        data: payload.data
    })
}

export default sendResponse;