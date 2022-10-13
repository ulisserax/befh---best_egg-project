Feature: Calculators - Debt to Income
#Users can calculate their debt to income ratio

Background:  Debt to Income

    Given I am on the Calculators header page
    And I have selected the 'Debt to Income' tab

#======================================================================================================================
Scenario:  Debt to Income Calculation - Enable Calculate button

    When I enter Annual income (before taxes)
    And I enter Monthly debt payments
    Then the 'Calculate' button enables

#======================================================================================================================
Scenario:  Debt to Income Calculation - Disable Calculate button

    Given I have entered values for Annual Income and Monthly debt payments
    And the Calculate button is enabled
    When I erase either the Annual Income or Monthly debt payments field
    Then the Calculate button is disabled

#======================================================================================================================
Scenario:  Calculate Debt to Income Ratio

    When I submit both Annual income and Monthly debt payments
    Then My debt-to-income ratio is displayed beneath the calculator
    And The ratio is accurately calculated - e.g. if I say my income is $120,000 and my monthly payments are $1,000, the ratio should be 10%

    #Debt-to-income ratio = Monthly payments / (Annual income / 12)

#======================================================================================================================
Scenario:  Modify Debt to Income Ratio

    Given I have already calculated my debt-to-income ratio
    When I modify either annual income or monthly debt payments
    And I click calculate
    Then My debt-to-income value updates

#======================================================================================================================
Scenario Outline:  Debt-to-income rating

    When my ratio is <ratio>
    Then my rating is <rating>

       Examples:
        |         ratio        |      rating  |
        |  Lower than 35%      |    Very good |
        |  Between 35% and 45% |      Fair    |
        |  50% or higher       |      Poor    |


 
#======================================================================================================================
Scenario Outline:  Itemize my Income - Toggling feature

    When I click 'Itemize my Income'
    Then additional fields appear beneath the Annual Income field
    And The Annual Income field is locked
    And I can enter numerical data into these fields
    And These fields disappear if I click 'Itemize my Income' again

#======================================================================================================================
Scenario Outline:  Itemize my Debts - Toggling feature

    When I click 'Itemize my Debts'
    Then additional fields appear beneath the Monthly debt payments field
    And I can dismiss these fields by clicking 'Itemize my Debts' again

#======================================================================================================================

