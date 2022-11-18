/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Cypress.on("uncaught:exception", () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
  });

Given(/^I am on the signup page$/, () => {
	return true;
});

When(/^I submit my username, email and password$/, () => {
	return true;
});

When(/^my email isn't already registered with BEFH$/, () => {
	return true;
});

Then(/^I am taken to the "([^"]*)" page$/, (args1) => {
	console.log(args1);
	return true;
});

Given(/^I have filled in all required fields - first name, last name, address 1, city, state, zip code, date of birth$/, () => {
	return true;
});

When(/^I click Create Account$/, () => {
	return true;
});

Then(/^I am taken to the Verification code page$/, () => {
	return true;
});

Given(/^I have not filled in the address field$/, () => {
	return true;
});

When(/^I enter a valid address into this field$/, () => {
	return true;
});

Then(/^a suggested address will appear$/, () => {
	return true;
});

Then(/^clicking this address will populate the related fields, e.g. City, State, Zip code$/, () => {
	return true;
});

Given(/^I have not filed in a required field$/, () => {
	return true;
});

When(/^I try to submit the form$/, () => {
	return true;
});

Then(/^A warning message appears over the missing field$/, () => {
	return true;
});

Given(/^I have successfully completed the User Info and Tell us about yourself forms$/, () => {
	return true;
});

Then(/^I have received a verification code$/, () => {
	return true;
});

When(/^I submit the code$/, () => {
	return true;
});

Then(/^I am taken to the start of the financial health survey$/, () => {
	return true;
});

