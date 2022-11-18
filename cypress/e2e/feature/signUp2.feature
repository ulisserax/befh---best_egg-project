Feature:  Financial Health Survey
#Once signup has been verified, users can submit info about their current financial state

Background:  Survey E2E
    Given I have completed verification
    And I am on the survey page - Best Egg Financial Health | Best Egg Financial Health 

Scenario:  How do you feel about your finances?
    When I select one of the four options
    Then I am taken to the next page

Scenario:  How can we make you feel better about your money? - Choosing categories
    When I select an option, e.g. Setting financial goals
    Then a dropdown appears with additional options
    And a number will appear next to the category, counting the number of "Anything specific?" options I selected
    And I can toggle these dropdowns on or off by clicking the "+" or "-" signs