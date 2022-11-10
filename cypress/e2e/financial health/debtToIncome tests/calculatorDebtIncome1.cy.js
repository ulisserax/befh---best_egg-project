/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Cypress.on("uncaught:exception", () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
  });
  
Given(/^I am on the Calculators header page$/, () => {
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

Then(/^I have selected the 'Debt to Income' tab$/, () => {
	cy.DebtToIncomeTab();
});

When(/^I enter Annual income - before taxes$/, () => {
	cy.AnnualIncomeTyping2();
});

When(/^I enter Monthly debt payments$/, () => {
	cy.MonthlyDebtTyping2();
});

Then(/^the 'Calculate' button enables$/, () => {
	cy.CheckCalculatorDebt();
});

Given(/^I have entered values for Annual Income and Monthly debt payments$/, () => {
	cy.AnnualIncomeTyping2();
	cy.MonthlyDebtTyping2();
});

Then(/^the Calculate button is enabled$/, () => {
	cy.CheckCalculatorDebt();
});

When(/^I erase either the Annual Income or Monthly debt payments field$/, () => {
	cy.AnnualIncomeErasing();
	cy.MonthlyDebtErasing();
});

Then(/^the Calculate button is disabled$/, () => {
	cy.CalculatorDebtNotExist();
});

When(/^I submit both Annual income and Monthly debt payments$/, () => {
	cy.AnnualIncomeTyping2();
	cy.MonthlyDebtTyping2();
	cy.ClickCalculatorDebt();
});

Then(/^My debt-to-income ratio is displayed beneath the calculator$/, () => {
	cy.RatioBubbleVisible();
});

Then(/^The ratio is accurately calculated - e.g. if I say my income is 120,000 and my monthly payments are 1,000, the ratio should be 10%$/, () => {
	cy.AnnualIncomeErasing();
	cy.MonthlyDebtErasing();
	cy.AnnualIncomeSpecific();
	cy.MonthlyDebtSpecific();
	cy.ClickCalculatorDebt();
	cy.RatioBubbleResult();
});

Given(/^I have already calculated my debt-to-income ratio$/, () => {
	cy.AnnualIncomeSpecific();
	cy.MonthlyDebtSpecific();
	cy.ClickCalculatorDebt();
});

When(/^I modify either annual income or monthly debt payments$/, () => {
	cy.AnnualIncomeErasing();
	cy.MonthlyDebtErasing();
	cy.AnnualIncomeModify();
	cy.MonthlyDebtModify();
});

When(/^I click calculate$/, () => {
	cy.ClickCalculatorDebt();
});

Then(/^My debt-to-income value updates$/, () => {
	cy.RatioBubbleResultModify();
});

When(/^my annual income is "([^"]*)"$/, (annualIncome) => {
	cy.AnnualIncomeTyping(annualIncome);
});

When(/^my monthly debt is "([^"]*)"$/, (monthlyDebt) => {
	cy.MonthlyDebtTyping(monthlyDebt);
});

Then(/^my rating is "([^"]*)"$/, (rating) => {
	cy.ClickCalculatorDebt();
	cy.RatingCheck(rating);
});

When(/^I click 'Itemize my Income'$/, () => {
	cy.ItemizeMyIncomes();
});

Then(/^additional fields appear beneath the Annual Income field$/, () => {
	cy.AnnualValuesVisible();
});

Then(/^The Annual Income field is locked$/, () => {
	cy.AnnualIncomeDisabled();
});

Then(/^I can enter numerical data into these fields$/, () => {
	cy.InputAnnualValues();
});

Then(/^These fields disappear if I click 'Itemize my Income' again$/, () => {
	cy.ItemizeMyIncomes();
	cy.InputAnnualValuesNotVisible();
});

When(/^I click 'Itemize my Debts'$/, () => {
	cy.ItemizeMyDebts();
});

Then(/^additional fields appear beneath the Monthly debt payments field$/, () => {
	cy.MonthlyDebtVisible();
});

Then(/^I can dismiss these fields by clicking 'Itemize my Debts' again$/, () => {
	cy.ItemizeMyDebts();
});
