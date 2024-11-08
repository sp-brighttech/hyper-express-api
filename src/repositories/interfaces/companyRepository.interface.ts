import Company from '../../models/schema/company.schema'
export default interface CompanyRepositoryInterface {
    index():  Promise<Company[]>;
}