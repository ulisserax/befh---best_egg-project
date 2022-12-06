Feature:  Financial Health Survey
#Once signup has been verified, users can submit info about their current financial state

Background:  Survey E2E
    Given I have completed verification
    And I am on the survey page - Best Egg Financial Health 

Scenario:  How do you feel about your finances?
    When I select one of the four options
    Then I am taken to the next page

Scenario:  How can we make you feel better about your money? - Choosing categories
    When I select an option, e.g. Setting financial goals
    Then a dropdown appears with additional options
    And a number will appear next to the category, counting the number of "Anything specific?" options I selected
    And I can toggle these dropdowns on or off by clicking the "+" or "-" signs

Scenario:  How can we make you feel better about your money?  - Something else...
    When I select "Something else..."
    Then I can submit text, with a 250 character limit
    And going over this limit results in a warning message - "Character limit reached"

Scenario:  Completing the survey
    Given I have filled in all info on the survey
    When I submit the survey
    Then I am taken to a landing page "Congratulations, let's start building your profile"
    And clicking next will take me to the Financial Health Homepage
    And I see a modal recommending that I connect my credit score    