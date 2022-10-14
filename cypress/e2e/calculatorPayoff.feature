Feature:  Calculators - Credit Card Payoff
#Users can calculate the length of time to pay off credit card debt

Background:  Credit Card Payoff

    Given I am on the calculator's page
    And I have switched to the Credit Card Payoff tab

#======================================================================================================================
Scenario:  Entering data

    When I enter numerical values into the fields
    Then these values are accepted
    And the calculate button is enabled

#======================================================================================================================
Scenario:  Entering faulty data

    When I attempt to enter non-numerical values
    Then these values are not accepted - they aren't populated in the field

#======================================================================================================================
Scenario:  Calculating payoff date

    When I've entered values into Credit Card balance, Interest Rate, and Monthly payments
    And I've clicked Calculate
    Then a table with expected credit card payoff data appears beneath the calculator
    And this table displays my monthly payment amount, the number of payments, total interest paid, and total amount paid
    And a graph displays the percentage of principal paid and interest paid

#======================================================================================================================
Scenario:  Adjusting Calculator

    When I enter new values into the calculator
    And I click Calculate
    Then the table updates

#======================================================================================================================