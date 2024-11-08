import Joi from "joi";

export const registerSchema = Joi.object({
    // Basic Company Information
    company_name: Joi.string()
        .trim()
        .min(2)
        .max(100)
        .required()
        .label('Company Name')
        .messages({
            'string.empty': 'Company Name is required.',
            'string.min': 'Company Name must be at least 2 characters.',
            'string.max': 'Company Name must not exceed 100 characters.',
        }),

    industry: Joi.string()
        .valid('Technology', 'Healthcare', 'Retail', 'Finance', 'Education', 'Other')
        .required()
        .label('Industry')
        .messages({
            'any.only': 'Industry is required and must be one of the predefined options.',
        }),

    company_size: Joi.string()
        .valid('1–10', '11–50', '51–200', '201–500', '501–1000', '1000+')
        .required()
        .label('Company Size')
        .messages({
            'any.only': 'Company Size is required and must be one of the predefined options.',
        }),

    website_url: Joi.string()
        .uri()
        .required()
        .label('Website URL')
        .messages({
            'string.uri': 'Website URL must be a valid URL.',
        }),

    // Contact Information for Main Account Holder
    contact_name: Joi.string()
        .trim()
        .min(2)
        .max(50)
        .required()
        .label('Primary Contact Full Name')
        .messages({
            'string.empty': 'Primary Contact Full Name is required.',
            'string.min': 'Primary Contact Full Name must be at least 2 characters.',
            'string.max': 'Primary Contact Full Name must not exceed 50 characters.',
        }),

    job_title: Joi.string()
        .trim()
        .max(50)
        .optional()
        .label('Job Title')
        .messages({
            'string.max': 'Job Title must not exceed 50 characters.',
        }),

    email_address: Joi.string()
        .email()
        .required()
        .label('Email Address')
        .messages({
            'string.email': 'Email Address must be a valid email.',
        }),

    phone_number: Joi.string()
        .pattern(/^[0-9()+\-.\s]+$/)
        .min(7)
        .max(15)
        .required()
        .label('Phone Number')
        .messages({
            'string.pattern.base': 'Phone Number must contain only numbers and valid symbols (+, -, ., (, ))',
            'string.min': 'Phone Number must be at least 7 characters.',
            'string.max': 'Phone Number must not exceed 15 characters.',
        }),

    // Extra Field: Password
    password: Joi.string()
        .min(8)
        .max(30)
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])'))
        .required()
        .label('Password')
        .messages({
            'string.min': 'Password must be at least 8 characters.',
            'string.max': 'Password must not exceed 30 characters.',
            'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
        })
});

export const loginSchema = Joi.object({
    // Email field
    email: Joi.string()
        .email()
        .required()
        .label('Email Address')
        .messages({
            'string.email': 'Email Address must be a valid email.',
            'string.empty': 'Email Address is required.'
        }),

    // Password field
    password: Joi.string()
        .min(8)
        .max(30)
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])'))
        .required()
        .label('Password')
        .messages({
            'string.empty': 'Password is required.',
            'string.min': 'Password must be at least 8 characters.',
            'string.max': 'Password must not exceed 30 characters.',
            'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
        })
});

export const forgotPasswordSchema = Joi.object({
    // Email field
    email: Joi.string()
        .email()
        .required()
        .label('Email Address')
        .messages({
            'string.email': 'Email Address must be a valid email.',
            'string.empty': 'Email Address is required.'
        }),
});