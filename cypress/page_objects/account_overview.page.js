class AccountOverviewPage {

    constructor() {
        this.route = '/account/index';
    }

    visit() {
        //update base url
        Cypress.config('baseUrl', 'https://app.surveygizmo.com');
        cy.visit(this.route);
    }

    getContactAddress() { return cy.get('.contact-info > :nth-child(1)'); }

}
export default AccountOverviewPage;