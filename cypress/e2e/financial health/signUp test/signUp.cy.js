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
	cy.CreateAccount();
});

Then(/^I am taken to the Verification code page$/, () => {
	//cy.TwoStepAuthentication();
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
	cy.ClearField();
});

When(/^I try to submit the form$/, () => {
	cy.CreateAccount();
});

Then(/^A warning message appears over the missing field$/, () => {
	cy.WarningMessage();
});

Given(/^I have successfully completed the User Info and Tell us about yourself forms$/, () => {
	cy.ClearNameField();
	cy.UserData();
	cy.EnterAddress();
	cy.ContainerVisible();
	cy.AddressChoice();
	cy.CreateAccount();
	cy.get('.text-base-sm > .befh-link-button').click();
	cy.CreateUser();
	cy.PossibleUser();
	cy.MoreUserData();
	cy.CreateAccount();
	cy.CreateAccount();
});

Then(/^I have received a verification code$/, () => {
	cy.TwoStepAuthentication();
});

When(/^I submit the code$/, () => {
	cy.CreateAccount();
});

Then(/^I am taken to the start of the financial health survey$/, () => {
	cy.contains('How do you feel about your finances?');
});

When(/^I select one of the four options$/, () => {
	cy.get('input[id="Almost in control"]').click();
});

Then(/^I am taken to the next page$/, () => {
	cy.get('.befh-solid-button').click();
});

When(/^I select an option, e.g. Setting financial goals$/, () => {
	cy.get('input[id="Setting financial goals checkbox"]').click();
});

Then(/^a dropdown appears with additional options$/, () => {
	cy.get('.space-y-2 > :nth-child(1) > :nth-child(2)').should('be.visible');
});

Then(/^a number will appear next to the category, counting the number of 'Anything specific' options I selected$/, () => {
	cy.get('input[id="Setting financial goals child 0"]').click();
	cy.get('.bg-befh-rb-red-400').should('be.visible');
});

Then(/^I can toggle these dropdowns on or off by clicking the 'plus' or 'minus' signs$/, () => {
	cy.get('.space-y-2 > :nth-child(1) > :nth-child(1) > .flex > :nth-child(2)').click();
	cy.get('.space-y-2 > :nth-child(1) > :nth-child(2)').should('not.exist');
	cy.get('.space-y-2 > :nth-child(1) > :nth-child(1) > .flex > :nth-child(2)').click();
	cy.get('.space-y-2 > :nth-child(1) > :nth-child(2)').should('be.visible');
});

When(/^I select 'Something else...'$/, () => {
	cy.get('input[id="Setting financial goals child 2"]').click();
});

Then(/^I can submit text, with a 250 character limit$/, () => {
	cy.get('label > .w-full')
		.type('McCallum makes the case that business schools are currently too focused on leadership to the exclusion of its counterpart. They aim to attract ambitious applicants who are hoping that by developing their leadership ability, they will be recognized an');
	cy.get('p[class="text-befh-rb-red-800"]').should('have.text', '250/250');	
});

Then(/^going over this limit results in a warning message - 'Character limit reached'$/, () => {
	cy.get('span[class="text-befh-rb-red-800"]').should('have.text', 'Character limit reached');
});

Given(/^I have filled in all info on the survey$/, () => {
	return true;
});

When(/^I submit the survey$/, () => {
	return true;
});

Then(/^I am taken to a landing page 'Congratulations, let's start building your profile'$/, () => {
	return true;
});

Then(/^clicking next will take me to the Financial Health Homepage$/, () => {
	return true;
});

Then(/^I see a modal recommending that I connect my credit score$/, () => {
	return true;
});
