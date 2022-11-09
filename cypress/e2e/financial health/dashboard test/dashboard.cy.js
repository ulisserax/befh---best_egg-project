/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Cypress.on("uncaught:exception", () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
  });

Given(/^I have not added any accounts to My Finances$/, () => {
	return true;
});

When(/^I access the dashboard$/, () => {
	return true;
});

Then(/^I see a call-to-action prompting me to access the My Finances page - "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

Then(/^I see a 'NEW' prompt on the My Finances tab$/, () => {
	return true;
});

When(/^I click the 'x' on the CTA$/, () => {
	return true;
});

Then(/^the CTA disappears$/, () => {
	return true;
});

When(/^I click 'Let's go'$/, () => {
	return true;
});

Then(/^I'm taken to the My Finances page$/, () => {
	return true;
});

When(/^I click the 'Learn More' link on the MX CTA$/, () => {
	return true;
});

Then(/^A modal appears, explaining BEFH's data protection$/, () => {
	return true;
});

Then(/^if I click the 'Okay' button, or the 'X', or outside the modal$/, () => {
	return true;
});

Then(/^it is dismissed$/, () => {
	return true;
});

