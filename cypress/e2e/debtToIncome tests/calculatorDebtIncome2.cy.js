/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(/^I am on the Calculators page$/, () => {
	cy.LoginPage();
    cy.SetUsername();
	cy.SetPassword();
	cy.ClickLoginButton();
    cy.wait(8000).PopupAssert();
	cy.PopupClose();
    cy.FinancialHealth();
    cy.IconHamburguer();
	cy.Calculators();
});

Then(/^I have switched to the Debt to Debts tab$/, () => {
	cy.DebtToIncomeTab();
});

Then(/^I have clicked Itemize my Debts$/, () => {
	cy.ItemizeMyDebts();
});

When(/^i click Itemize my Incomes$/, () => {
	cy.ItemizeMyIncomes();
});

Then(/^additional fields are displayed$/, () => {
	cy.AdditionalDisplayed();
});

Then(/^i can populate these fields$/, () => {
	cy.InputDebtValues();
	cy.CheckIfNotEmpty();
});

Then(/^i can only enter numerical values, or an error message displays$/, () => {
	cy.ItemizeMyIncomes();
	cy.ItemizeMyDebts();
	cy.NonNumericalValuesInput();
});

When(/^i enter data into the available fields$/, () => {
	cy.ItemizeMyIncomes();
	cy.InputDebtValues();
	cy.InputAnnualValues();
});

When(/^i click 'Calculate Debts'$/, () => {
	cy.ClickCalculatorDebt();
});

Then(/^the sum of the Debts fields is displayed under 'Calculate Debts' as 'Itemized Debts Applied'$/, () => {
	cy.CheckingSumVisible();
});

Then(/^the sum is displayed under Annual Debts$/, () => {
	cy.CheckingSumVisible();
});

Then(/^clicking 'Itemize my Debts' closes the added fields, but the sum remains in the Annual Debts field$/, () => {
	cy.ItemizeMyIncomes();
	cy.ItemizeMyDebts();
	cy.CheckingSumAfterClosing();
	
});
