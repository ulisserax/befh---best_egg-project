/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


Given(/^I am on the Calculators header page$/, () => {
	return true;
});

Then(/^I have selected the 'Debt to Income' tab$/, () => {
	return true;
});

When(/^I enter Annual income (before taxes)$/, () => {
	return true;
});

When(/^I enter Monthly debt payments$/, () => {
	return true;
});

Then(/^the 'Calculate' button enables$/, () => {
	return true;
});

Given(/^I have entered values for Annual Income and Monthly debt payments$/, () => {
	return true;
});

Then(/^the Calculate button is enabled$/, () => {
	return true;
});

When(/^I erase either the Annual Income or Monthly debt payments field$/, () => {
	return true;
});

Then(/^the Calculate button is disabled$/, () => {
	return true;
});

When(/^I submit both Annual income and Monthly debt payments$/, () => {
	return true;
});

Then(/^My debt-to-income ratio is displayed beneath the calculator$/, () => {
	return true;
});

Then(/^The ratio is accurately calculated - e.g. if I say my income is $120,000 and my monthly payments are $1,000, the ratio should be 10%$/, () => {
	return true;
});

Given(/^I have already calculated my debt-to-income ratio$/, () => {
	return true;
});

When(/^I modify either annual income or monthly debt payments$/, () => {
	return true;
});

When(/^I click calculate$/, () => {
	return true;
});

Then(/^My debt-to-income value updates$/, () => {
	return true;
});

When(/^my ratio is "([^"]*)"$/, (ratio) => {
	return true;
});

Then(/^my rating is "([^"]*)"$/, (rating) => {
	return true;
});

When(/^I click 'Itemize my Income'$/, () => {
	return true;
});

Then(/^additional fields appear beneath the Annual Income field$/, () => {
	return true;
});

Then(/^The Annual Income field is locked$/, () => {
	return true;
});

Then(/^I can enter numerical data into these fields$/, () => {
	return true;
});

Then(/^These fields disappear if I click 'Itemize my Income' again$/, () => {
	return true;
});

When(/^I click 'Itemize my Debts'$/, () => {
	return true;
});

Then(/^additional fields appear beneath the Monthly debt payments field$/, () => {
	return true;
});

Then(/^I can dismiss these fields by clicking 'Itemize my Debts' again$/, () => {
	return true;
});
