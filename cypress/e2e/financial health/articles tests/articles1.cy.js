/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Cypress.on("uncaught:exception", () => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
  });

//   before(()=>{
// 	cy.CreatePassword()
// 	cy.GetCid("cypressTestUatUserBEFH01")
// 	cy.GetAuthToken()
// 	cy.GetCidToken()
// 	cy.SignUp()
// 	cy.OtpLogin()

// })
  
Given(/^i am on the Knowledge Center page$/, () => {
	//cy.Login('jcastaldi', 'Aftermath1!')
	cy.Login('testUser1122332')
	cy.IconHamburguer();
	cy.KnowledgeCenter();
	//cy.contains('Knowledge Center').click() it seems that we have to click first on a iconHamburguer and than click on the Knowledge
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
	cy.ArticlesMatchingSearch('Credit Card');
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
