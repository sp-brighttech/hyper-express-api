import { Request, Response } from 'hyper-express';
import Joi from 'joi';
import { StatusCodes } from "http-status-codes";

export const validateRequest = (schema: Joi.ObjectSchema) => (req: Request, res: Response, next: () => void) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
        const formattedErrors = error.details.map(detail => ({
            field: detail.context?.key || 'unknown', // Using optional chaining for safety
            message: detail.message
        }));
        res.response(StatusCodes.BAD_REQUEST, 'Request body contains invalid data.', { errors: formattedErrors });
    } else {
        next();
    }
};