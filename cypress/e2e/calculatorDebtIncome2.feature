Feature: Calculators - Debt to Income
#Users can calculate their debt to income ratio


Background:  Debt to Income - Itemizing Income

    Given I am on the Calculator's page
    And I have switched to the Debt to Income tab
    And I have clicked Itemize my Income

#======================================================================================================================
Scenario:  Itemize my Income - Toggling additional fields

    When I click Itemize my Income
    Then Additional fields are displayed
    And I can populate these fields
    And I can only enter numerical values, or an error message displays

#======================================================================================================================
Scenario:  Itemize my Income - Calculate Income

    When I enter data into the available fields
    And I click 'Calculate Income'
    Then the sum of the income fields is displayed under 'Calculate Income' as 'Itemized Income Applied'
    And the sum is displayed under Annual Income
    And clicking 'Itemize my Income' closes the added fields, but the sum remains in the Annual income field

#======================================================================================================================
