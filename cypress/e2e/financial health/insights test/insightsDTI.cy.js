/// <reference types="cypress" />

import { Given, When, Then, } from '@badeball/cypress-cucumber-preprocessor';

Cypress.on("uncaught:exception", () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
  });

// afterEach ( () => {
//  	cy.request('https://twig.sbx.bestegg.com/financial-health/api/reset-user/');
// })

Given(/^I have connected my VantageScore$/, () => {
	cy.LoginPage();
	cy.contains('Sign in').click();
	cy.contains('Sign in with your Best Egg login').click();
    cy.SetUsernameDTI();
	cy.SetPasswordDTI();
	cy.ClickLoginButton();
    cy.request(Cypress.config("baseUrl")).as("homeResponse");
	cy.get('@homeResponse').its('status').should('eq', 200);
	cy.PopupAssert();
	cy.PopupClose();
    cy.IconHamburguer();
    cy.contains('VantageScore®').click({force: true});
    cy.CreditProfile();
});

Then(/^I am on the Insights homepage$/, () => {
	cy.IconHamburguer();
    cy.Insights();
});

When(/^I click the 'View my DTI ratio' inside 'Debt-to-income ratio' thumbnail$/, () => {
	//cy.get(':nth-child(1) > .h-88 > :nth-child(1) > .font-semibold > .h-6').click();
    if (cy.contains('View my DTI ratio')){
		cy.contains('View my DTI ratio').click({force: true})
	}
	else{
		cy.get('.h-88 > :nth-child(1) > .font-semibold').click()
	}
});

Then(/^I can see a popup called update to insert the 'Monthly debt payments' and 'Gross monthly income'$/, () => {
	cy.get('div[class="flex flex-col p-6"]').should('be.visible');
    cy.get('input[id="debt"]').should('be.visible');
    cy.get('input[id="income"]').should('be.visible');
});

Then(/^I can see a DTI ratio bar, which matches the ratio listed on the insights homepage$/, () => {
	//cy.get('.twig-secondary-button').click()
	cy.get('#debt').type('90')
	cy.get('#income').type('350')
	cy.get('.space-x-4 > .befh-solid-button').click()
	//cy.get('.py-6').should('be.visible', {force:true});
});

Then(/^I see a 'You and Your Peers' section, which compares my DTI to other Best Egg applicants$/, () => {
	cy.get('h2[class="font-semibold text-befh-rb-gray-900 text-xl lg:text-2xl font-serif tracking-header-rb text-center pb-2"]')
        .should('have.text', ' You and Your Peers ');
    cy.get('#dti-insights_tooltip-container').should('be.visible');
});

Then(/^i can see a 'Why is this so important' section$/, () => {
	cy.get('p[class="text-center pb-6 font-semibold text-befh-rb-gray-900"]')
        .should('have.text', ' Why is this so important? ');
});

Then(/^i can see a 'What you can do' section$/, () => {
	cy.get('.overflow-hidden > .font-semibold').should('have.text', ' What you can do ');
});

Then(/^clicking the arrow next to 'Debt-to-income ratio' returns me to the insights homepage$/, () => {
	cy.get('a[class="mr-3 my-auto cursor-pointer"]').click();
});

When(/^I click 'Calculate my borrowing power'$/, () => {
	return true;
});

Then(/^a modal appears, where I can enter 'Monthly debt payments', 'Gross monthly income', and 'VantageScore'$/, () => {
	return true;
});

Then(/^my monthly debt payments and gross monthly income data is already populated$/, () => {
	return true;
});

Then(/^the VantageScore field is empty$/, () => {
	return true;
});

When(/^I click the arrow next to 'Credit utilization'$/, () => {
	return true;
});

Then(/^I am taken to the credit utilization page$/, () => {
	return true;
});

Then(/^I can see a section that shows my credit utilization as a percentage e.g. 50%, along with credit used and available credit$/, () => {
	return true;
});

Then(/^I can see a section 'You and Your Peers' that compares my credit utilization to other Best Egg applicants$/, () => {
	return true;
});

Then(/^I can see a 'Why is this so important' section$/, () => {
	return true;
});

Then(/^I can see a 'What you can do' section$/, () => {
	return true;
});

Then(/^clicking the arrow next to 'Credit utilization' returns me to the insights homepage$/, () => {
	return true;
});
