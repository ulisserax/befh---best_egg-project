Feature:  Financial Coach - Coming Soon
#Users who arrive on this page can sign up for notifications, offer feedback on this service

Background:  Financial Coach interest survey
    Given I am on the Financial Coach page
    And I have not filled out the survey under 'We're curious'

#======================================================================================================================

Scenario:  Would you benefit from speaking to a financial coach?
    Given I am on the 'Would you benefit from speaking to a financial coach' question
    When I click Yes, No, or Maybe
    Then I am taken to the next question

#======================================================================================================================

Scenario:  What method would you most prefer to use when speaking to a financial coach?
    Given I am on the 'What method would you most prefer to use when speaking to a financial coach' question
    When I click Phone call, Video call, Email, or Online chat
    Then I am taken to the next question

#======================================================================================================================

Scenario:  Would you be willing to pay for this service?
    Given I am on the 'Would you be willing to pay for this service' question
    When I click Yes, No, or Maybe
    Then the survey completes, reading 'Thank you!  Your responses shape the future of Best Egg Financial Health for members just like you.'