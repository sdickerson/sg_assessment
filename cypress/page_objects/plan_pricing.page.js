class PlansPricingPage {

    constructor() {
        //update base url
        Cypress.config('baseUrl', 'https://www.surveygizmo.com');
        this.route = '/plans-pricing/';
    }

    visit() {
        cy.visit(this.route);
    }

    getCollaboratorBlock () {
        return cy.get('[data-plan="basic"] > .block-plan-column-v2__wrapper > .block-plan-column-v2__header');
    }

    getProfessionalBlock () {
        return cy.get('[data-plan="standard"] > .block-plan-column-v2__wrapper > .block-plan-column-v2__header');
    }

    getFullAccessBlock () {
        return cy.get('[data-plan="full"] > .block-plan-column-v2__wrapper > .block-plan-column-v2__header');
    }

    getEnterpriseBlock () {
        return cy.get('[data-plan="custom"] > .block-plan-column-v2__wrapper > .block-plan-column-v2__header');
    }

    getStartTrialButton_Plan (planType) {
        let planBlock = '';
        switch (planType.toLowerCase()) {
            case 'collaborator':
                planBlock = this.getCollaboratorBlock();
                break;
            case 'professional':
                planBlock = this.getProfessionalBlock();
                break;
            case 'full access':
                planBlock = this.getFullAccessBlock();
                break;
            case 'enterprise':
                planBlock = this.getEnterpriseBlock();
                break;
        }
        return planBlock.find('.ui-button-rounded--size-small').contains('START FREE TRIAL');
    }

    getCreateAccountButton_FreeAccount () {
        return cy.get('.block-plan-free')
            .find('.ui-button-rounded--size-small')
            .contains('CREATE ACCOUNT');

    }

    getStartTrialButton_Footer () {
        return cy.get('.block-cta-bottom > .sg-block__wrapper')
            .find('.block-cta-bottom__buttons .ui-button-rounded--style-outline-secondary')
            .contains('start a free trial');
    }

    getPlanComparison_Header () {
        return cy.get('#plans-comparison > .sg-block__wrapper');
    }

    getStartTrialButtons_PlanComparison () {
        return this.getPlanComparison_Header().find('.ui-button-rounded--size-small');
    }

}
export default PlansPricingPage;
