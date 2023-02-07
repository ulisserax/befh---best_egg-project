/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Cypress.on("uncaught:exception", () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
  });

Given(/^i have navigated to a specific article page$/, () => {
	//cy.Login('jcastaldi', 'Aftermath1!');
	cy.LoginPage();
	cy.contains('Sign in').click();
	cy.contains('Sign in with your Best Egg login').click();
    cy.SetUsername();
	cy.SetPassword();
	cy.ClickLoginButton();
	cy.request(Cypress.config("baseUrl")).as("homeResponse");
	cy.get('@homeResponse').its('status').should('eq', 200);
	cy.PopupAssert();
	cy.PopupClose();
    cy.IconHamburguer();
	cy.KnowledgeCenter();
    cy.ArticleClick();
});

When(/^i click Previous Article or Next Article$/, () => {
	cy.NextPage();
});

Then(/^i am taken to the next article in the list, or the previous$/, () => {
	cy.ArticleElements();
});

When(/^i submit a Search$/, () => {
	cy.SubmitSecondSearch();
});

Then(/^i am taken back to the Knowledge Article homepage$/, () => {
	cy.BackToKnowledgePage();
});

Then(/^my search criteria has been submitted here$/, () => {
	cy.SubmitSearch();
});

Then(/^articles are filtered based upon my search criteria$/, () => {
	cy.ArticlesMatchingSearch("Credit Card");
});

When(/^i click on an article link beneath the search bar, under 'Recent Blog Posts'$/, () => {
	cy.ArticleElements();
    //cy.RecentBlogLink();
});

Then(/^i am taken to that Article's page$/, () => {
	cy.ArticlePage();
});
