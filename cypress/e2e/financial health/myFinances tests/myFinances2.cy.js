/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Cypress.on("uncaught:exception", () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
  });


Given(/^I have connected bank accounts$/, () => {
	cy.LoginPage();
    cy.SetUsername();
	cy.SetPassword();
	cy.ClickLoginButton();
    cy.wait(8000).PopupAssert();
	cy.PopupClose();
    cy.FinancialHealth();
    cy.wait(8000).AccountHomepage();
});

Then(/^I am on the MX page$/, () => {
    cy.IconHamburguer();
    cy.MyFinancesPage();
});

When(/^I access MX$/, () => {
	cy.MyFinancesTab();
});

Then(/^I can see my accounts listed under 'All Accounts'$/, () => {
	cy.wait(3000).AllAccountsDisplaying();
});

Then(/^I can toggle between the accounts by clicking them$/, () => {
	return true;
});

When(/^I select an account within the central table, e.g. X Bank Checking$/, () => {
	return true;
});

Then(/^a side drawer tab opens, displaying current and available balance, as well as a table of transactions for this account$/, () => {
	return true;
});

When(/^I click the Filter Accounts button$/, () => {
	return true;
});

Then(/^a filter menu appears$/, () => {
	return true;
});

Then(/^I can select the accounts I want to see, individually or as a group using 'All'$/, () => {
	return true;
});

Given(/^I have opened the filter accounts menu$/, () => {
	return true;
});

When(/^I select accounts and click 'Apply'$/, () => {
	return true;
});

Then(/^the selected accounts appear in the table$/, () => {
	return true;
});

Given(/^I have toggled the details table for an account$/, () => {
	return true;
});

When(/^I click on the row for a transaction$/, () => {
	return true;
});

Then(/^a page opens within the frame, showing details of the transaction$/, () => {
	return true;
});
