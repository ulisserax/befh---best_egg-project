import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am running the app locally', () => {
  // Added as a no-op step to showcase 'Given', 'When', 'Then'
  // structure within the *.feature scenario files.
});
//
When('I send a request to smoke test url', () => {
  cy.visit('http://localhost:8000/financial-health');
});
//
Then('I get a response without errors', () => {
  cy.url().should('eq', 'http://localhost:8000/financial-health/');
});
describe('Testing the Landing Page', ()=>{
  it('should visit the landing page',  ()=> {
    cy.visit('http://localhost:8000/financial-health');
  });
});