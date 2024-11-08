import {Router} from "hyper-express";
import CompanyController from '../../controllers/company.controller';

const router = new Router();

router.get('/', CompanyController.index.bind(CompanyController))

export default router