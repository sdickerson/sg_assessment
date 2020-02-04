class CreateAccountModal {

    constructor() {
        this.title = 'Create your account.';
        this.dataCenters = ['', 'US', 'CA', 'EU'];
        this.industries = [
            '',
            'Accounting',
            'Aerospace / Aviation / Automotive',
            'Agriculture / Forestry / Fishing',
            'Biotechnology',
            'Communications',
            'Consulting',
            'Construction / Home Improvement',
            'Education',
            'Consumer Packaged Goods',
            'E-commerce',
            'Energy',
            'Healthcare',
            'Engineering/Architecture',
            'Hospitality',
            'Entertainment',
            'Insurance',
            'Entertainment/Recreation',
            'Legal',
            'Finance',
            'Government',
            'Finance/Banking',
            'Manufacturing',
            'Market Research',
            'Marketing / Advertising',
            'Media / Printing / Publishing',
            'Mining',
            'Not For Profit',
            'Logistics',
            'Real Estate',
            'Retail',
            'Marketing Agency',
            'Software',
            'Technology',
            'Telecommunications',
            'Medical',
            'Transportation',
            'Wholesale',
            'Other',
            'Pharmaceuticals',
            'Professional Sports',
            'Publishing',
            'Research',
            'Services',
            'Services - Food',
            'Staffing',
            'Travel/Hospitality',
            'Utility/Energy'
        ];
        this.departments = [
            '',
            'Accounting/Finance',
            'Administrative/Management',
            'Advertising/Marketing',
            'Customer Service',
            'Human Resources',
            'IT/Development',
            'Legal/Compliance',
            'Operations',
            'Product Management/Development',
            'Public Relations/Communications',
            'Procurement',
            'Research and Development',
            'Sales',
            'Student',
            'UX/Design',
            'Other'
        ]
    }

    getTitle () { return cy.get('#block-pricing-table-v2--modal--create-account > .ui-modal__container > .ui-modal__content > .ui-modal__title--default'); }
    getFirstName () { return cy.get('#firstname-331fd9a4-5fa2-4c8e-8f95-9e02c5f203e8'); }
    getLastName () { return cy.get('#lastname-331fd9a4-5fa2-4c8e-8f95-9e02c5f203e8'); }
    getEmail () { return cy.get('#email-331fd9a4-5fa2-4c8e-8f95-9e02c5f203e8'); }
    getPassword () { return cy.get('#dummy_sensitive_field-331fd9a4-5fa2-4c8e-8f95-9e02c5f203e8'); }
    getOrganization () { return cy.get('#company-331fd9a4-5fa2-4c8e-8f95-9e02c5f203e8'); }
    getIndustry () { return cy.get('#dropdown-331fd9a4-5fa2-4c8e-8f95-9e02c5f203e8'); }
    getIndustryOptions () { return cy.get('#dropdown-331fd9a4-5fa2-4c8e-8f95-9e02c5f203e8 option'); }
    getDepartment () { return cy.get('#department__c-331fd9a4-5fa2-4c8e-8f95-9e02c5f203e8'); }
    getDepartmentOptions () { return cy.get('#department__c-331fd9a4-5fa2-4c8e-8f95-9e02c5f203e8 option'); }
    getDataCenter () { return cy.get('#data_center__c-331fd9a4-5fa2-4c8e-8f95-9e02c5f203e8'); }
    getDataCenterOptions () { return cy.get('#data_center__c-331fd9a4-5fa2-4c8e-8f95-9e02c5f203e8 option'); }
    getSubscriptionCheckbox () { return cy.get('.ui-modal__create-account .legal-consent-container').find('[type="checkbox"]').eq(2); }
    getConsentCheckbox () { return cy.get('.ui-modal__create-account .legal-consent-container').find('[type="checkbox"]').last();}
    getSubmitButton () { return cy.get('#hsForm_331fd9a4-5fa2-4c8e-8f95-9e02c5f203e8 > .hs_submit > .actions > .hs-button').contains('Start a Free Trial')}

    getFirstNameLabel () { return cy.get('#label-firstname-331fd9a4-5fa2-4c8e-8f95-9e02c5f203e8'); }
    getFirstNameError () { return cy.get('.hs_firstname > .no-list > li > .hs-error-msg'); }
    getLastNameLabel () { return cy.get('#label-lastname-331fd9a4-5fa2-4c8e-8f95-9e02c5f203e8'); }
    getLastNameError () { return cy.get('.hs_firstname > .no-list > li > .hs-error-msg'); }
    getEmailLabel () { return cy.get('#label-email-331fd9a4-5fa2-4c8e-8f95-9e02c5f203e8'); }
    getEmailDesc () { return cy.get('[data-reactid=".hbspt-forms-1.1:$1"] > .hs_email > .hs-field-desc'); }
    getEmailError () { return cy.get('.hs_email > .no-list > li > .hs-error-msg'); }
    getPasswordLabel () { return cy.get('#label-dummy_sensitive_field-331fd9a4-5fa2-4c8e-8f95-9e02c5f203e8'); }
    getPasswordError () { return cy.get('.hs_dummy_sensitive_field > .no-list > li > .hs-error-msg'); }
    getOrganizationLabel () { return cy.get('#label-company-331fd9a4-5fa2-4c8e-8f95-9e02c5f203e8'); }
    getOrganziationError () { return cy.get('.hs_company > .no-list > li > .hs-error-msg') };
    getIndustryLabel () { return cy.get('#label-dropdown-331fd9a4-5fa2-4c8e-8f95-9e02c5f203e8'); }
    getIndustryError () { return cy.get('.hs_dropdown > .no-list > li > .hs-error-msg'); }
    getDepartmentLabel () { return cy.get('#label-department__c-331fd9a4-5fa2-4c8e-8f95-9e02c5f203e8'); }
    getDepartmentError () { return cy.get('.hs_department__c > .no-list > li > .hs-error-msg'); }
    getDataCenterLabel () { return cy.get('#label-data_center__c-331fd9a4-5fa2-4c8e-8f95-9e02c5f203e8'); }
    getConsentLabel () { return cy.get('.ui-hubspot-form .hs-form .hs-form-booleancheckbox label'); }
    getConsentError () { return cy.get('[data-reactid=".hbspt-forms-1.2"]'); }
    getServiceAgreementLink () { return cy.get('a').contains('service agreement'); }
    getPrivacyPolicyLink () { return cy.get('a').contains('privacy policy'); }
    getPasswordHelp () { return cy.get('validate-password-modal -capital-invalid -number-invalid -length-invalid validate-password-modal--show-me'); }
    getSuccessMessage () {return cy.get('.submitted-message'); }
}
export default CreateAccountModal;