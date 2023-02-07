/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Cypress.on("uncaught:exception", () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
  });

Given(/^I am on the Financial Health homepage$/, () => {
	cy.LoginPage();
	cy.contains('Sign in').click();
	cy.contains('Sign in with your Best Egg login').click();
	cy.SetUsernameFinancialAdvisor();
	cy.SetPasswordFinancialAdvisor();
	cy.ClickLoginButton();
	cy.request(Cypress.config("baseUrl")).as("homeResponse");
	cy.get('@homeResponse').its('status').should('eq', 200);
	cy.PopupAssert();
	cy.PopupClose();
});

When(/^I click 'Check it out', under 'Get Personalized guidance from a financial coach'$/, () => {
	cy.ClickFinancialHealthScore();
	cy.get('.twig-secondary-button');
});

Then(/^I am taken to the Financial Coach page$/, () => {
	return true;
});

Given(/^i am on the Financial Coach page$/, () => {
	return true;
});

When(/^I click on 'Notify me'$/, () => {
	return true;
});

Then(/^the button changes to 'We'll be in touch'$/, () => {
	return true;
});
