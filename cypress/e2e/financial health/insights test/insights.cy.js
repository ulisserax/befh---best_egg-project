/// <reference types="cypress" />

import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor';

Cypress.on("uncaught:exception", () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
  });

// After ( () => {
// 	cy.request('https://twig.sbx.bestegg.com/financial-health/api/reset-user/');
// })

Given(/^i have not added accounts to My Finances$/, () => {
	//cy.Login('tivix3', 'n8NhV1l1vJT4^^')
	cy.LoginPage();
	cy.contains('Sign in').click();
	cy.contains('Sign in with your Best Egg login').click();
	//cy.ClickSignInButton();
    cy.SetUsername();
	cy.SetPassword();
	cy.ClickLoginButton();
	cy.request(Cypress.config("baseUrl")).as("homeResponse");
	cy.get('@homeResponse').its('status').should('eq', 200);
    cy.PopupAssert();
});

When(/^i access the insights page$/, () => {
	cy.PopupClose();
	cy.IconHamburguer();
	cy.Insights();
});

Then(/^i see a call-to-action for the My Finances page$/, () => {
	cy.CallToActionVisible();
});

When(/^i click the 'x' on the CTA$/, () => {
	cy.PopupClose();
	cy.IconHamburguer();
	cy.Insights();
	cy.ClickCloseCTA();
});

Then(/^the CTA is dismissed$/, () => {
	cy.CallToActionNotVisible();
});

When(/^i click 'Let's go'$/, () => {
	cy.PopupClose();
	cy.IconHamburguer();
	cy.Insights();
	cy.ClickLetsGo();
});

Then(/^i'm taken to the My Finances page$/, () => {
	cy.contains('My Finances');
});

When(/^i click the 'Learn More' link on the MX CTA$/, () => {
	cy.PopupClose();
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
