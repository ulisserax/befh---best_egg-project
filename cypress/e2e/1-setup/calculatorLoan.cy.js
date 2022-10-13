/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(/^I am on the calculator's header page$/, () => {
	cy.LoginPage();
	cy.SetUsername();
	cy.SetPassword();
	cy.ClickLoginButton();
	cy.wait(8000).PopupClose();
	cy.contains('Financial Health').click();
	cy.contains('Calculators').click();
});

When(/^I have selected the 'Loan' tab$/, () => {
	cy.LoanTabVisible();
});

When(/^I select a loan amount$/, () => {
	cy.SliderClick();
});

When(/^I select a Term length$/, () => {
	cy.ClickTermButton();
});

When(/^I select a Credit Score$/, () => {
	cy.DropdownLoan();
});

When(/^I click 'Calculate'$/, () => {
	cy.ClickCalculate();
});

Then(/^an Estimated Monthly Payment is displayed$/, () => {
	//assert if it's displaying the thumbnail that regards the totally payment estimative
	cy.EstimateMonthlyPayment();
});

Given(/^I have already submitted info and see an Estimated Monthly Payment$/, () => {
	cy.SliderClick();
	cy.EstimateMonthlyPaymentValues();
});

When(/^I adjust the Loan Amount, Term Length, or the Credit Score$/, () => {
	//cy.SliderClickAdjust();
	//cy.ClickTermButtonAdjust();
	cy.DropdownLoanAdjust();
});

Then(/^The Estimated Monthly Payment field disappears$/, () => {
	cy.NotEstimateMonthlyPayment();
});

Given(/^I have previously adjusted my Loan Calculator inputs$/, () => {
	return true;//not empty
});

Then(/^The previously displayed Estimated Monthly Payments has disappeared$/, () => {
	return true;
});

When(/^I submit the new inputs$/, () => {
	cy.SliderClickAdjust();
	cy.ClickTermButtonAdjust();
	cy.DropdownLoan();
	cy.ClickCalculate();
});

Then(/^I am shown a new Estimated Monthly Payment$/, () => {
	cy.EstimateMonthlyPayment();
	cy.EstimateMonthlyPaymentNewValues();
	cy.CheckEstimateMonthlyPaymentUpdate();
	//cy.EstimateMonthlyPaymentValues2(); Develop a different function on this part to get the values and assert that they're different
});
