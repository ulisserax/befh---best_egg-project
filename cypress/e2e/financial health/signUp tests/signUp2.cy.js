/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Cypress.on("uncaught:exception", () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
  });

Given(/^I have completed verification$/, () => {
	return true;
});

Then(/^I am on the survey page - Best Egg Financial Health$/, () => {
	return true;
});

When(/^I select one of the four options$/, () => {
	return true;
});

Then(/^I am taken to the next page$/, () => {
	return true;
});

When(/^I select an option, e.g. Setting financial goals$/, () => {
	return true;
});

Then(/^a dropdown appears with additional options$/, () => {
	return true;
});

Then(/^a number will appear next to the category, counting the number of "([^"]*)" options I selected$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^I can toggle these dropdowns on or off by clicking the "([^"]*)" or "([^"]*)" signs$/, (args1,args2) => {
	console.log(args1,args2);
	return true;
});

When(/^I select "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^I can submit text, with a 250 character limit$/, () => {
	return true;
});

Then(/^going over this limit results in a warning message - "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

Given(/^I have filled in all info on the survey$/, () => {
	return true;
});

When(/^I submit the survey$/, () => {
	return true;
});

Then(/^I am taken to a landing page "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^clicking next will take me to the Financial Health Homepage$/, () => {
	return true;
});

Then(/^I see a modal recommending that I connect my credit score$/, () => {
	return true;
});
