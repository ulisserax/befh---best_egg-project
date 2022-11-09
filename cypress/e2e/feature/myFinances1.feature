Feature:  MX Page - First time visitor
#Users arrive here and can connect their accounts

Background:  Accessing MX page for the first time
    Given I have not added accounts to my Finances

#======================================================================================================================

Scenario:  Welcome to MoneyManager
    When I access the My Finances page
    Then I see a modal 'MoneyManager'
    And I can dismiss this by clicking 'Get Started'

#======================================================================================================================

Scenario:  MoneyManager Terms and Conditions
    When I click Terms and Conditions
    Then The modal expands to show the terms and conditions
    And I can dismiss the terms and conditions by clicking 'x'

#======================================================================================================================