// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import CreateAccountModal from '../page_objects/create_account.modal.js';
import * as utils from './utilities.js';

Cypress.Commands.add("createAccount", (generateUnique, fname, lname, email, password, org, industry, dept, dataCenter, subscribe) => {

    const createAcct = new CreateAccountModal();

    if (generateUnique) {
        lname = lname + utils.getTimestamp();
        email = utils.generateEmailAddress(email.substring(0,email.indexOf('@')), email.substring(email.indexOf('@')));
    }
    Cypress.config('userEmail', email);
    createAcct.getFirstName().type(fname);
    createAcct.getLastName().type(lname);
    createAcct.getEmail().type(email);
    createAcct.getPassword().type(password);
    createAcct.getOrganization().type(org);
    createAcct.getIndustry().select(industry).should('have.value', industry);
    createAcct.getDepartment().select(dept).should('have.value', dept);
    createAcct.getDataCenter().select(dataCenter).should('have.value', dataCenter);
    if (subscribe) createAcct.getSubscriptionCheckbox().check({force:true});
    createAcct.getConsentCheckbox().check({force:true});
    //createAcct.getSubmitButton().click();
    //createAcct.getSuccessMessage().contains('Thanks for submitting the form').should('be.visible');

});
