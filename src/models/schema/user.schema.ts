import {Timestamp} from "mongodb";

export default interface UserSchema {
    company_name: string;
    industry: string;
    company_size: string;
    website_url: string;
    contact_name: number;
    job_title: string;
    email_address: string;
    phone_number: string;
    password: string;
    created_at?: Date;
    updated_at?: Date;
    deleted_at: Date | null;
}
