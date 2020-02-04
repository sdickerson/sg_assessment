class DashboardHomePage {

    constructor() {
        this.route = '/';
    }

    visit() {
        //update base url
        Cypress.config('baseUrl', 'https://app.surveygizmo.com');
        cy.visit(this.route);
    }

    getTitle() { return cy.get('.navbar-title-container-home'); }
    getAccountMenu () { return cy.get(':nth-child(1) > .dropdown-toggle > span').last(); }
    getAccountMenuItem (item) { return cy.get('.navbar-nav .dropdown-menu li a').contains(item).first() ;}

}
export default DashboardHomePage;