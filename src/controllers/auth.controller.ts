import {Request, Response} from 'hyper-express';
import {StatusCodes} from "http-status-codes";

class AuthController {
    constructor() {
    }

    async login(req: Request, res: Response) {

    }

    async register(req: Request, res: Response) {
        return res.response(StatusCodes.OK, "User registered successfully", {user: req.body});
    }

    async forgotPassword(req: Request, res: Response) {

    }

    async resetPassword(req: Request, res: Response) {

    }
}

export default new AuthController