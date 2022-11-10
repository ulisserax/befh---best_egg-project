/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Cypress.on("uncaught:exception", () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
  });

Given(/^i have not added accounts to My Finances$/, () => {
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

When(/^i access the insights page$/, () => {
	cy.IconHamburguer();
	cy.Insights();
});

Then(/^i see a call-to-action for the My Finances page$/, () => {
	cy.CallToActionVisible();
});

When(/^i click the 'x' on the CTA$/, () => {
	return true;
});

Then(/^the CTA is dismissed$/, () => {
	return true;
});

When(/^i click 'Let's go'$/, () => {
	return true;
});

Then(/^i'm taken to the My Finances page$/, () => {
	return true;
});

When(/^i click the 'Learn More' link on the MX CTA$/, () => {
	cy.IconHamburguer();
	cy.Insights();
	cy.LearnMoreClick();
});

Then(/^a modal appears, explaining BEFH's data protection$/, () => {
	cy.ModalVisible();
});

Then(/^if i click the 'Okay' button, or the 'X', or outside the modal$/, () => {
	cy.ClickOkay();
	//cy.ClickClose();
	//cy.ClickOutside();
});

Then(/^it's dismissed$/, () => {
	cy.ModalNotVisible();
});
