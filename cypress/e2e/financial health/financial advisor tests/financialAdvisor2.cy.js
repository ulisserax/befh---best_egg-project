/// <reference types="cypress" />

import { Given, When, Then, Before } from '@badeball/cypress-cucumber-preprocessor';

Cypress.on("uncaught:exception", () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
  });

Given(/^I am on the Financial Coach page$/, () => {
	return true;
});

Then(/^I have not filled out the survey under 'We're curious'$/, () => {
	return true;
});

Given(/^I am on the 'Would you benefit from speaking to a financial coach' question$/, () => {
	return true;
});

When(/^I click Yes, No, or Maybe$/, () => {
	return true;
});

Then(/^I am taken to the next question$/, () => {
	return true;
});

Given(/^I am on the 'What method would you most prefer to use when speaking to a financial coach' question$/, (args1) => {
	return true;
});

When(/^I click Phone call, Video call, Email, or Online chat$/, () => {
	return true;
});

Then(/^I am taken to the next question$/, () => {
	return true;
});

Given(/^I am on the 'Would you be willing to pay for this service' question$/, () => {
	return true;
});

When(/^I click Yes, No, or Maybe$/, () => {
	return true;
});

Then(/^the survey completes, reading 'Thank you!  Your responses shape the future of Best Egg Financial Health for members just like you.'$/, () => {
	return true;
});
