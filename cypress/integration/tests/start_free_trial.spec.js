import HomePage from '../../page_objects/home.page.js';
import PlansPricingPage from '../../page_objects/plan_pricing.page.js';
import CreateAccountModal from '../../page_objects/create_account.modal.js';
import '../../support/commands.js'

const home = new HomePage();
const planPricing = new PlansPricingPage();
const createAcct = new CreateAccountModal();

context('Home Page - Start Free Trial', () => {

    it('should go to the homepage', () => {
        home.visit();
        home.getLogo().should('be.visible');
    });

    it('should have a Start Free Trial button in Header', () => {

        home.getStartTrialButton_Header()
            .should('be.visible')
            .click();
        cy.location('pathname').should('include', planPricing.route);

        //Go back to the homepage using logo
        home.getLogo().click();
        cy.location('pathname').should('not.include', planPricing.route);

     });


    it('should have a Start Free Trial button in Testimonials', () => {

        home.getStartTrialButton_Testimonials()
            .scrollIntoView()
            .should('be.visible')
            .click({force: true});
        cy.location('pathname').should('include', planPricing.route);

        //Go back to the homepage using Back button
        cy.go('back');
        cy.location('pathname').should('not.include', planPricing.route);

    });

    it('should have a Start Free Trial button in Footer', () => {

        home.getStartTrialButton_Footer()
            .scrollIntoView()
            .should('be.visible')
            .click({force: true});
        cy.location('pathname').should('include', planPricing.route);

    });

});

context('Plans Page - Start Free Trial', () => {

    it('should have a Start Free Trial button in Collaborator plan', () => {

        planPricing.getStartTrialButton_Plan('collaborator')
            .scrollIntoView()
            .should('be.visible');

    });

    it('should have a Start Free Trial button in Professional plan', () => {

        planPricing.getStartTrialButton_Plan('professional')
            .scrollIntoView()
            .should('be.visible');

    });

    it('should have a Start Free Trial button in Full Access plan', () => {

        planPricing.getStartTrialButton_Plan('full access')
            .scrollIntoView()
            .should('be.visible');

    });

    it('should NOT have a Start Free Trial button in Enterprise plan', () => {

        planPricing.getEnterpriseBlock()
            .contains('START FREE TRIAL')
            .should('not.exist');

    });

    it('should have a Create Account button in the Free Account section', () => {

        planPricing.getCreateAccountButton_FreeAccount()
            .scrollIntoView()
            .should('be.visible');

    });

    it('should have a Create Account button and Start Free Trial buttons in the Comparison Header', () => {

        planPricing.getStartTrialButtons_PlanComparison().then(function (btns) {
            expect(btns.length).to.eql(4);
        });

    });

    it('should have a Start Free Trial button in the page footer', () => {

        planPricing.getStartTrialButton_Footer()
            .scrollIntoView()
            .should('be.visible');

    });

    it('should display a Create Account modal', () => {
        planPricing.getCreateAccountButton_FreeAccount()
            .scrollIntoView()
            .should('be.visible')
            .click({force: true});
        createAcct.getTitle().contains(createAcct.title).should('be.visible');
    });

});

context('Create Account Modal - UI Validation', () => {

    it('should not submit if form has not been filled out', () => {
        createAcct.getSubmitButton().click({force:true});
        createAcct.getTitle().contains(createAcct.title).should('be.visible');
    });

    it('should require first name', () => {
        createAcct.getFirstNameLabel().contains('First name:*').should('be.visible');
        createAcct.getFirstNameError().contains('Please complete this required field.').should('be.visible');
    });

    it('should require last name', () => {
        createAcct.getLastNameLabel().contains('Last name:*').should('be.visible');
        createAcct.getLastNameError().contains('Please complete this required field.').should('be.visible');
    });

    it('should require email', () => {
        createAcct.getEmailLabel().contains('Email Address*').should('be.visible');
        createAcct.getEmailError().contains('Please complete this required field.').should('be.visible');
    });

    it('should describe email as username ', () => {
       createAcct.getEmailDesc().contains('* This will be your username').should('be.visible');
    });

    it('should require password', () => {
        createAcct.getPasswordLabel().contains('Password:*').should('be.visible');
        createAcct.getPasswordError().contains('Please complete this required field.').should('be.visible');
    });

    it('should require organization', () => {
        createAcct.getOrganizationLabel().contains('Organization:*').should('be.visible');
        createAcct.getOrganziationError().contains('Please complete this required field.').should('be.visible');
    });

    it('should require industry', () => {
        createAcct.getIndustryLabel().contains('Industry:*').should('be.visible');
        createAcct.getIndustryError().contains('Please select an option from the dropdown menu.').should('be.visible');
    });

    it('should require department', () => {
        createAcct.getDepartmentLabel().contains('Department:*').should('be.visible');
        createAcct.getDepartmentError().contains('Please select an option from the dropdown menu.').should('be.visible');
    });

    it('should require data center', () => {
        createAcct.getDataCenterLabel().contains('Data Center:*').should('be.visible');
    });

    it('should require consent', () => {
        createAcct.getSubmitButton().scrollIntoView();
       createAcct.getConsentLabel().contains('By accessing and using this page, you agree to our service ' +
           'agreement and privacy policy. Your information will never be shared.*').should('exist');
       createAcct.getConsentError().contains('Please complete this required field.').should('be.visible');
    });

    it('should have service agreement link', () => {
        createAcct.getServiceAgreementLink().should('have.attr', 'href', 'https://www.surveygizmo.com/service-agreement/');
    });

    it('should have privacy policy link', () => {
        createAcct.getPrivacyPolicyLink().should('have.attr', 'href', 'https://www.surveygizmo.com/privacy/');
    });

    //NOTE: I would add this same validation on all dropdown values (their lists are long)
    it('should have the correct Data Center options', () => {
        createAcct.getDataCenterOptions().then(options => {
            const actual = [...options].map(o => o.value);
            expect(actual).to.have.members(createAcct.dataCenters);
        })
    });


//TODO: Add password validation

//TODO: Add email validation (@test.com)
});

context('Create Account Modal - Create Account', () => {
    it('should successfully create an account', () => {

        cy.fixture('users.json').then((users)  => {
            let user = users[0];
            cy.createAccount(true, user.fname, user.lname, user.email,
                user.password, user.org, user.industry, user.dept, user.dataCenter, true);
        });

    });
});

