import CompanyServiceInterface from './interfaces/companyService.interface'
import CompanyRepository from "../repositories/company.repository";
import Company from "../models/schema/company.schema";

export default class CompanyService implements CompanyServiceInterface {
    private companyRepository: CompanyRepository;

    constructor() {
        this.companyRepository = new CompanyRepository();
    }

    async index(): Promise<Company[]> {
        return await this.companyRepository.index();
    }
}