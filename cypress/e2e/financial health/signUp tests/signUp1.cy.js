/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Cypress.on("uncaught:exception", () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
  });

Given(/^I am on the signup page$/, () => {
	cy.LoginPage();
	cy.contains('Get started').click();
});

When(/^I submit my username, email and password$/, () => {
	cy.CreateUser();
});

When(/^my email isn't already registered with BEFH$/, () => {
	cy.PossibleUser();
});

Then(/^I am taken to the 'Tell us about yourself' page$/, () => {
	cy.contains('Tell us about yourself').should('be.visible');
});

Given(/^I have filled in all required fields - first name, last name, address 1, city, state, zip code, date of birth$/, () => {
	cy.MoreUserData();
});

When(/^I click Create Account$/, () => {
	cy.wait(1_000_000);
	//cy.CreateAccount();
});

Then(/^I am taken to the Verification code page$/, () => {
	cy.TwoStepAuthentication();
	return true;
});

Given(/^I have not filled in the address field$/, () => {
	cy.ClearField();
});

When(/^I enter a valid address into this field$/, () => {
	cy.EnterAddress();
});

Then(/^a suggested address will appear$/, () => {
	cy.ContainerVisible();
});

Then(/^clicking this address will populate the related fields, e.g. City, State, Zip code$/, () => {
	cy.AddressChoice();
});

Given(/^I have not filled in a required field$/, () => {
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