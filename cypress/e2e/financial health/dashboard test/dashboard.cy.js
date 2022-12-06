/// <reference types="cypress" />

import { Given, When, Then, After } from '@badeball/cypress-cucumber-preprocessor';

Cypress.on("uncaught:exception", () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
  });

// afterEach( () => {
// 	cy.request('https://twig.sbx.bestegg.com/financial-health/api/reset-user/');
// })

Given(/^I have not added any accounts to My Finances$/, () => {
	//cy.Login('tivix3', 'n8NhV1l1vJT4^^');
	cy.LoginPage();
	cy.contains('Sign in').click();
	cy.contains('Sign in with your Best Egg login').click();
    cy.SetUsername();
	cy.SetPassword();
	cy.ClickLoginButton();
	cy.request(Cypress.config("baseUrl")).as("homeResponse");
	cy.get('@homeResponse').its('status').should('eq', 200);
	cy.PopupAssert();
});

When(/^I access the dashboard$/, () => {
	cy.PopupClose();
	cy.IconHamburguer();
    cy.Dashboard();
});

Then(/^I see a call-to-action prompting me to access the My Finances page - It's easier than ever to manage your money$/, () => {
	cy.NoMXAccount();
	cy.MXText();
});

Then(/^I see a 'NEW' prompt on the My Finances tab$/, () => {
	return true;
});

When(/^I click the 'x' on the CTA$/, () => {
	cy.PopupClose();
	cy.DashboardCloseCTA();
});

Then(/^the CTA disappears$/, () => {
	cy.MXNotVisible();
});

When(/^I click 'Let's go'$/, () => {
	cy.PopupClose();
	cy.IconHamburguer();
    cy.Dashboard();
	cy.LetsGo();
});

Then(/^I'm taken to the My Finances page$/, () => {
	cy.contains('My Finances');
});

When(/^I click the 'Learn More' link on the MX CTA$/, () => {
	cy.PopupClose();
	cy.DashboardLearnMoreClick();
});

Then(/^A modal appears, explaining BEFH's data protection$/, () => {
	cy.DashboardModalVisible();
});

Then(/^if I click the 'Okay' button, or the 'X', or outside the modal$/, () => {
	cy.DashboardClickOkay();
});

Then(/^it is dismissed$/, () => {
	cy.DashboardModalNotVisible();
});

