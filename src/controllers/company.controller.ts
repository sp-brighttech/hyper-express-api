import {Request, Response} from 'hyper-express';
import CompanyService from "../services/company.service";

class CompanyController {
    private companyService: CompanyService;

    constructor() {
        this.companyService = new CompanyService();

    }

    public async index(req: Request, res: Response) {
        const response = {
            status: true,
            message: "Company List",
            data: {
                companies: await this.companyService.index()
            }
        }
        return res.status(200).json(response);
    }
}

export default new CompanyController();