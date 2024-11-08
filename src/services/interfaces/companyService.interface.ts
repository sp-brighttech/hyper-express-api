import Company from '../../models/schema/company.schema'
export default interface CompanyServiceInterface {
    index():  Promise<Company[]>;
}