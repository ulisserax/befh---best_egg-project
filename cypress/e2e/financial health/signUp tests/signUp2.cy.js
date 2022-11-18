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

Then(/^I am on the survey page - Best Egg Financial Health | Best Egg Financial Health$/, () => {
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
