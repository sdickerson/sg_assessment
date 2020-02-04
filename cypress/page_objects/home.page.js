class HomePage {

    constructor() {
        this.route = '/';
    }

    visit() {
        //update base url
        Cypress.config('baseUrl', 'https://www.surveygizmo.com');
        cy.visit(this.route);
    }

    getLogo () { return cy.get('.main-navigation__brand a'); }

    getStartTrialButton_Header () {
        return cy.get('.main-navigation__cta a.-trial')
            .contains('Start a free trial');
    }

    getStartTrialButton_Testimonials () {
        return cy.get('.home-v2 .section-testimonials__buttons')
            .find('.ui-button-rounded--style-fill-black')
            .contains('START a free trial');
    }

    getStartTrialButton_Footer () {
        return cy.get('.ui-button-rounded span')
            .contains('start a free trial');
    }

}
export default HomePage;