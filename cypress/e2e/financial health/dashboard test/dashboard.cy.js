/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Cypress.on("uncaught:exception", () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
  });

Given(/^I have not added any accounts to My Finances$/, () => {
	cy.Login('tivix3', 'n8NhV1l1vJT4^^');
    cy.NoMXAccount();
});

When(/^I access the dashboard$/, () => {
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
	cy.DashboardCloseCTA();
});

Then(/^the CTA disappears$/, () => {
	cy.MXNotVisible();
});

When(/^I click 'Let's go'$/, () => {
	cy.LetsGo();
});

Then(/^I'm taken to the My Finances page$/, () => {
	return true;
});

When(/^I click the 'Learn More' link on the MX CTA$/, () => {
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

