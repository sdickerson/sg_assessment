import LoginPage from '../../page_objects/login.page.js';
import DashboardHomePage from '../../page_objects/dashboard_home.page.js';
import AccountOverviewPage from '../../page_objects/account_overview.page';
const login = new LoginPage();
const dashboardHome = new DashboardHomePage();
const acctOverview = new AccountOverviewPage();

//NOTE: I ran into some login funkiness
context('Verify Account Overview', () => {

    it('should login', () => {
        login.visit();
        cy.fixture('users.json').then((users)  => {
            let user = users[1];
            cy.login(user.email, user.password);
        });
        let logoutUsers = cy.get('p.text-center > .btn').contains('Continue and Log out Other Sessions');
        if (logoutUsers) logoutUsers.click();
        dashboardHome.getTitle().contains('Home').should('be.visible');
    });

    it('should go to Account Overview', () => {
        dashboardHome.getAccountMenu().click();
        dashboardHome.getAccountMenuItem('Summary').click();
        dashboardHome.getAccountMenuItem('Account Overview').click();
        //cy.location('pathname').should('include', acctOverview.route);
    });

    it('should log in again if prompted', () => {

        if (login.getUsername()) {
            cy.fixture('users.json').then((users) => {
                let user = users[1];
                cy.login(user.email, user.password);
            });
        }
        cy.location('pathname').should('include', acctOverview.route);
    });

    it('should verify the contact address', () => {
        cy.fixture('users.json').then((users)  => {
            let user = users[1];
            acctOverview.getContactAddress().contains(user.org).should('be.visible');
            acctOverview.getContactAddress().contains(user.fname + ' ' + user.lname).should('be.visible');
            acctOverview.getContactAddress().contains(user.email).should('be.visible');
        });
    });

    it('should log out', () => {
        dashboardHome.getAccountMenu().click();
        dashboardHome.getAccountMenuItem('Log Out').click();
        cy.location('pathname').should('include', '/logout/');
    });
});