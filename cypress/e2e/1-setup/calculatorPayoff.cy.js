/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


Given(/^I am on the calculator's page$/, () => {
	cy.LoginPage();
	cy.SetUsername();
	cy.SetPassword();
	cy.ClickLoginButton();
	cy.wait(8000).PopupClose();
	cy.contains('Financial Health').click();
	cy.contains('Calculators').click();
});

When(/^I have switched to the Credit Card Payoff tab$/, () => {
	cy.CreditCardPayoffTab();
});

When(/^I enter numerical values into the fields$/, () => {
	cy.InputValues();
});

Then(/^these values are accepted$/, () => {
	cy.ValuesInsertedCorrectly();
});

Then(/^the calculate button is enabled$/, () => {
	cy.CalculatorEnabled();
});

When(/^I attempt to enter non-numerical values$/, () => {
	cy.InputNonNumericalValues();
});

Then(/^these values are not accepted - they aren't populated in the field$/, () => {
	cy.InputNotValid();
});

When(/^I've entered values into Credit Card balance, Interest Rate, and Monthly payments$/, () => {
	cy.InputValues();
});

When(/^I've clicked Calculate$/, () => {
	cy.CalculatorClick();
});

Then(/^a table with expected credit card payoff data appears beneath the calculator$/, () => {
	cy.TablePayoffVisible();
});

Then(/^this table displays my monthly payment amount, the number of payments, total interest paid, and total amount paid$/, () => {
	cy.TableVisibleElements();
	cy.TakeElementsTable();
});

Then(/^a graph displays the percentage of principal paid and interest paid$/, () => {
	cy.DashboardPayoff();
});

When(/^I enter new values into the calculator$/, () => {
	cy.InputNewValues();
});

When(/^I click Calculate$/, () => {
	cy.CalculatorClick();
});

Then(/^the table updates$/, () => {
	cy.TakeNewElementsTable();
	cy.CompareOldAndNewValues();
});

    