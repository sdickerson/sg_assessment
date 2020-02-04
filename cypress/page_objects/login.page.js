class LoginPage {

    constructor() {
        this.route = '/login/v1';
    }

    visit() {
        //update base url
        Cypress.config('baseUrl', 'https://app.surveygizmo.com');
        cy.visit(this.route);
    }

    getLogo() { return cy.get('left-hand-only'); }
    getHeading() { return cy.get('.heading'); }
    getUsername() { return cy.get('#username'); }
    getPassword() { return cy.get('#password'); }
    getSubmitButton() { return cy.get('.login-button-wrapper > .btn').contains('Log In'); }

}
export default LoginPage;