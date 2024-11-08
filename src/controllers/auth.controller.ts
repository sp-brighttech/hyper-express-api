import {Request, Response} from 'hyper-express';
import {StatusCodes} from "http-status-codes";
import UserService from "../services/user.service";
import UserServiceInterface from "../services/interfaces/userService.interface";
import UserSchema from "../models/schema/user.schema";

class AuthController {
    private userService: UserServiceInterface;
    constructor() {
        this.userService = new UserService();
    }

    async login(req: Request, res: Response) {

    }

    async register(req: Request, res: Response) {
        const user:UserSchema = {
            company_name: req.body.company_name,
            industry: req.body.industry,
            company_size: req.body.company_size,
            website_url: req.body.website_url,
            contact_name: req.body.website_url,
            job_title: req.body.job_title,
            email_address: req.body.email_address,
            phone_number: req.body.phone_number,
            password: req.body.password,
        }
        const newUser = await this.userService.create(user);
        return res.response(StatusCodes.OK, "User registered successfully", {user: newUser});
    }

    async forgotPassword(req: Request, res: Response) {

    }

    async resetPassword(req: Request, res: Response) {

    }
}

export default new AuthController