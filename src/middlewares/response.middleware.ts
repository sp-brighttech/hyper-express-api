// src/middlewares/response.middleware.ts

import {MiddlewareNext, Request, Response} from 'hyper-express';

export default (req: Request, res: Response, next: MiddlewareNext) => {
    res.response = (statusCode: number = 200, message: string = '', data: object = {}) => {
        res.status(statusCode).json({
            status: statusCode,
            message,
            data,
        });
    };
    next();
};
