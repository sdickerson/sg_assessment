// site constants
const URL = 'https://www.surveygizmo.com/';

//elements
const logo = '.main-navigation__brand a';
const startTrialButton_Header = '.main-navigation__cta a.-trial';
const startTrialButton_Testimonals = '.ui-button-rounded--style-fill-black';
const startTrialButton_Footer = '.ui-button-rounded span';
const createAccountButton = '.ui-button-rounded--size-small';
const createAccountModal = '.ui-modal__container';
const createAccountModalCloseButton = '.ui-modal__close-button';
const planBlock_Basic = '[data-plan="basic"] > .block-plan-column-v2__wrapper > .block-plan-column-v2__header';
const planBlock_Professional = '[data-plan="standard"] > .block-plan-column-v2__wrapper > .block-plan-column-v2__header';
const planBlock_FullAccess = '[data-plan="full"] > .block-plan-column-v2__wrapper > .block-plan-column-v2__header';
const planBlock_Enterprise = '[data-plan="custom"] > .block-plan-column-v2__wrapper > .block-plan-column-v2__header';
const planBlock_Free = '.block-plan-free';
const planComparison_Header = '.block-plans-comparison-v2__header';
const freeTrialButton = '.ui-button-rounded--size-small';
const planFooter = '.block-cta-bottom > .sg-block__wrapper';
const freeTrialButton_Footer = '.block-cta-bottom__buttons .ui-button-rounded--style-outline-secondary';


//labels
let startTrialTitle = 'Start a free trial';
const createAccountLabel = 'CREATE ACCOUNT';
const createAccountModalTitle = 'Create your account.';


//Tests
context('Home Page - Start Free Trial', () => {

    it('should go to the homepage', () => {
        cy.visit(URL + 'plans-pricing/');
        cy.get(logo).should('be.visible');
    });

    /*
    it('should have a Start Free Trial button in Header', () => {

        cy.get(startTrialButton_Header)
            .contains(startTrialTitle)
            .should('be.visible')
            .click();
        cy.location('pathname').should('include', 'plans-pricing');

        //Go back to the homepage using back button
        cy.go('back');
        cy.location('pathname').should('not.include', 'plans-pricing');

     });

    it('should have a Start Free Trial button in Testimonials', () => {

        startTrialTitle = 'START a free trial';
        cy.get('.home-v2 .section-testimonials__buttons')
            .find(startTrialButton_Testimonals)
            .contains(startTrialTitle)
            .scrollIntoView()
            .should('be.visible')
            .click({force: true});
        cy.location('pathname').should('include', 'plans-pricing');

        //Go back to the homepage using logo
        cy.get(logo).click();
        cy.location('pathname').should('not.include', 'plans-pricing');

    });

    it('should have a Start Free Trial button in Footer', () => {

        startTrialTitle = 'start a free trial';
        cy.get(startTrialButton_Footer)
            .contains(startTrialTitle)
            .scrollIntoView()
            .should('be.visible')
            .click({force: true});
        cy.location('pathname').should('include', 'plans-pricing');

    });
    */

});

context('Plans Page - Create Account', () => {

    it('should have a Start Free Trial button in Collaborator plan', () => {

        startTrialTitle = 'START FREE TRIAL';
        cy.get(planBlock_Basic)
            .find(freeTrialButton)
            .contains(startTrialTitle)
            .scrollIntoView()
            .should('be.visible');

    });

    it('should have a Start Free Trial button in Professional plan', () => {

        cy.get(planBlock_Professional)
            .find(freeTrialButton)
            .contains(startTrialTitle)
            .scrollIntoView()
            .should('be.visible');

    });

    it('should have a Start Free Trial button in Full Access plan', () => {

        cy.get(planBlock_FullAccess)
            .find(freeTrialButton)
            .contains(startTrialTitle)
            .scrollIntoView()
            .should('be.visible');

    });

    it('should NOT have a Start Free Trial button in Enterprise plan', () => {

        cy.get(planBlock_Enterprise)
            .contains(startTrialTitle)
            .should('not.exist');

    });

    it('should have a Create Account button in the Free Account section', () => {

        cy.get(planBlock_Free)
            .find(createAccountButton)
            .contains(createAccountLabel)
            .scrollIntoView()
            .should('be.visible');

    });

    it('should have a Create Account button and Start Free Trial buttons in the Comparison Header', () => {

        cy.get(planComparison_Header)
            .contains(createAccountLabel)
            .scrollIntoView()
            .should('be.visible');

        cy.get(planComparison_Header)
            .get(freeTrialButton).contains(startTrialTitle).then(function (btns) {
            expect(btns.length).to.eql(3);
        });

    });

    it('should have a Start Free Trial button in the page footer', () => {

        startTrialTitle = 'start a free trial';
        cy.get(planFooter)
            .find(freeTrialButton_Footer)
            .contains(startTrialTitle)
            .scrollIntoView()
            .should('be.visible');

    });

    /*
    it('should display a Create Account modal', () => {
        cy.get(createAccountButton)
            .contains(createAccountLabel)
            .scrollIntoView()
            .should('be.visible')
            .click({force: true});
        cy.get(createAccountModalHeader).contains(createAccountModalTitle).should('be.visible');
    });
    */
});