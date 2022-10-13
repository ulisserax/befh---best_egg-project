/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(/^I am on the Calculator's page$/, () => {
	return true;
});

Then(/^I have switched to the Debt to Income tab$/, () => {
	return true;
});

Then(/^I have clicked Itemize my Income$/, () => {
	return true;
});

When(/^I click Itemize my Income$/, () => {
	return true;
});

Then(/^Additional fields are displayed$/, () => {
	return true;
});

Then(/^I can populate these fields$/, () => {
	return true;
});

Then(/^I can only enter numerical values, or an error message displays$/, () => {
	return true;
});

When(/^I enter data into the available fields$/, () => {
	return true;
});

When(/^I click 'Calculate Income'$/, () => {
	return true;
});

Then(/^the sum of the income fields is displayed under 'Calculate Income' as 'Itemized Income Applied'$/, () => {
	return true;
});

Then(/^the sum is displayed under Annual Income$/, () => {
	return true;
});

Then(/^clicking 'Itemize my Income' closes the added fields, but the sum remains in the Annual income field$/, () => {
	return true;
});
