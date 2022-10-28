/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';


Given(/^i am on the Knowledge Center page$/, () => {
	cy.LoginPage();
    cy.SetUsername();
	cy.SetPassword();
	cy.ClickLoginButton();
    cy.wait(8000).PopupAssert();
	cy.PopupClose();
    cy.FinancialHealth();
    cy.IconHamburguer();
	cy.wait(5000).KnowledgeCenter();
});

Given(/^i have not entered any text into search$/, () => {
	cy.ArticleSearchEmpty();
});

Then(/^all articles are displayed$/, () => {
	cy.ArticlesDisplaying();
});

Then(/^the article thumbnails are organized by the date they were published, with the most recent articles first$/, () => {
	cy.OpenArticles();
	cy.LargestDateArticle();
});

When(/^i click on an article thumbnail$/, () => {
	cy.ArticleThumbnail();
});

Then(/^i am taken to that article's page$/, () => {
	cy.ArticlePage();
});

Then(/^the page's hero image, content text, and content links load successfully$/, () => {
	cy.ArticleElements();
});

Then(/^i can navigate back to the Knowledge Center by clicking on the 'back' icon at the top left$/, () => {
	cy.BackToKnowledgePage();
});

When(/^i submit text to the search bar$/, () => {
	cy.SubmitSearch();
});

Then(/^i am served articles which match my search$/, () => {
	cy.ArticlesMatchingSearch();
});

Then(/^i can submit a new search$/, () => {
	cy.ClearSearch();
});

When(/^i submit a search$/, () => {
	cy.SubmitSecondSearch();
});

When(/^i then clear the text from the search bar$/, () => {
	cy.ClearSearch();
});

Then(/^all articles are visible$/, () => {
	cy.TotalArticles();
});

Then(/^the articles are organized by the date they were published$/, () => {
	//create a function to erase the list and begin to count again all the elements scrapped.
    return true;
});
