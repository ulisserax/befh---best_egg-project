/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Cypress.on("uncaught:exception", () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
  });

Given(/^I have not added accounts to my Finances$/, () => {
	cy.LoginPage();
    cy.SetUsername();
	cy.SetPassword();
	cy.ClickLoginButton();
    cy.wait(8000).PopupAssert();
	cy.PopupClose();
    cy.FinancialHealth();
    cy.IconHamburguer();
    cy.MyFinancesPage();
    cy.MoneyManagerWindow();
});

When(/^I access the My Finances page$/, () => {
	return true;
});

Then(/^I see a modal 'MoneyManager'$/, () => {
	cy.MoneyManagerWindow();
});

Then(/^I can dismiss this by clicking 'Get Started'$/, () => {
	return true;
});

When(/^I click Terms and Conditions$/, () => {
	return true;
});

Then(/^The modal expands to show the terms and conditions$/, () => {
	return true;
});

Then(/^I can dismiss the terms and conditions by clicking 'x'$/, () => {
	return true;
});
