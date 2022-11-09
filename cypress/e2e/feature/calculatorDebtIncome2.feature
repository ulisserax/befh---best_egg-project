Feature: Calculators - Debt to Income
#Users can calculate their debt to income ratio


Background:  Debt to Debts - Itemizing Debts

    Given I am on the Calculators page
    And I have switched to the Debt to Debts tab
    And I have clicked Itemize my Debts

#======================================================================================================================
Scenario:  Itemize my Incomes - Toggling additional fields

    When i click Itemize my Incomes
    Then additional fields are displayed
    And i can populate these fields
    And i can only enter numerical values, or an error message displays

#======================================================================================================================
Scenario:  Itemize my Debts - Calculate Debts

    When i enter data into the available fields
    And i click 'Calculate Debts'
    Then the sum of the Debts fields is displayed under 'Calculate Debts' as 'Itemized Debts Applied'
    And the sum is displayed under Annual Debts
    And clicking 'Itemize my Debts' closes the added fields, but the sum remains in the Annual Debts field

#======================================================================================================================