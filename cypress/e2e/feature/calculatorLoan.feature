Feature:  Calculators - Loan Calculator
#Users can calculate monthly payments on loans

Background:  Loan Calculator

    Given I am on the calculator's header page
    And I have selected the 'Loan' tab

#======================================================================================================================
Scenario:  Estimated Monthly Payments

    When I select a loan amount
    And I select a Term length
    And I select a Credit Score
    And I click 'Calculate'
    Then an Estimated Monthly Payment is displayed

#======================================================================================================================
Scenario:  Adjust Estimated Monthly Payments

    Given I have already submitted info and see an Estimated Monthly Payment
    When I adjust the Loan Amount, Term Length, or the Credit Score
    Then The Estimated Monthly Payment field disappears

#======================================================================================================================
Scenario:  Adjust Estimated Monthly Payments - New Data

    Given I have previously adjusted my Loan Calculator inputs
    And The previously displayed Estimated Monthly Payments has disappeared
    When I submit the new inputs
    Then I am shown a new Estimated Monthly Payment

#======================================================================================================================


 

