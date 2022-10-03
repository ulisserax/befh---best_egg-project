/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(/^I access the BestEgg login page$/, () => {
	cy.LoginPage();
	//This is the case to access the users.json file
	//cy.fixture("users").then((data) => {
		//this.data = data;
	//})
	
});

When(/^I login on the page$/, () => {
	cy.SetUsername();
	//cy.get('app-username-input-field > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix').type(this.data.username);
	cy.SetPassword();
	cy.ClickLoginButton();
});

Then(/^I see a popup as a guideline$/, () => {
	cy.wait(10000).PopupAssert();
	cy.PopupClose();
});

Then(/^I see the homepage$/, () => {
	cy.HomePageAssert();
});


Given(/^I am at the Financial Health Page$/, () => {
	cy.contains('Financial Health').click();
	//The page asks to signIn again
	cy.wait(5000).ClickSignInButton();
	cy.SetUsername();
	cy.SetPassword();
	cy.ClickLoginButton();
	
});

When(/^I click on the Knowledge Center Page$/, () => {
	cy.wait(5000).KnowledgeCenter();
});

When(/^I have not entered any text into search$/, () => {
	cy.ArticleSearchEmpty();
});

Then(/^All articles are displayed$/, () => {
	cy.ArticlesDisplaying();
});

Then(/^The article thumbnails are organized by the date they were published, with the most recent articles first$/, () => {
	cy.OpenArticles();
	cy.LargestDateArticle();
});

When(/^I click on an article thumbnail$/, () => {
	cy.ArticleThumbnail();
});

Then(/^I am taken to that article's page$/, () => {
	cy.ArticlePage();
});

Then(/^The page's hero image, content text, and content links load successfully$/, () => {
	cy.ArticleElements();
});

Then(/^I can navigate back to the Knowledge Center by clicking on the 'back' icon at the top left$/, () => {
	cy.BackToKnowledgePage();
});

When(/^I submit text to the search bar$/, () => {
	cy.SubmitSearch();
});

Then(/^I am served articles which match my search$/, () => {
	cy.ArticlesMatchingSearch();
});

Then(/^I can submit a new search$/, () => {
	cy.ClearSearch();
});

When(/^I submit a search$/, () => {
	cy.SubmitSecondSearch();
});

When(/^I then clear the text from the search bar$/, () => {
	cy.ClearSearch();
});

Then(/^All articles are visible$/, () => {
	cy.TotalArticles();
});

Then(/^The articles are organized by the date they were published$/, () => {
	cy.OpenArticles();
	cy.LargestDateArticle();
});

When(/^I have navigated to a specific article page$/, () => {
	cy.ArticleElements();
});

When(/^I click Previous Article or Next Article$/, () => {
	cy.NextPage();
});

Then(/^I am taken to the next article in the list, or the previous$/, () => {
	cy.ArticleElements();
});

Then(/^I am taken back to the Knowledge Article homepage$/, () => {
	cy.BackToKnowledgePage();
});

Then(/^My search criteria has been submitted here$/, () => {
	cy.SubmitSearch();
});

Then(/^Articles are filtered based upon my search criteria$/, () => {
	cy.ArticlesMatchingSearch();
});

When(/^I click on an article link beneath the search bar, under 'Recent Blog Posts'$/, () => {
	cy.ArticleClick();
	cy.wait(5000).ClickSignInButton();
	cy.SetUsername();
	cy.SetPassword();
	cy.ClickLoginButton();
	cy.RecentBlogLink();
});



    
