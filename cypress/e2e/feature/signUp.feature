Feature:  Financial Health Signup
#Point at which users can sign up for an account for Financial Health - Sign up page

Scenario:  Signup - User info
    #Submitting username, email and password
    Given I am on the signup page
    When I submit my username, email and password
    And my email isn't already registered with BEFH
    Then I am taken to the 'Tell us about yourself' page

Scenario:  Signup - Tell us about yourself
    Given I have filled in all required fields - first name, last name, address 1, city, state, zip code, date of birth
    When I click Create Account
    Then I am taken to the Verification code page

Scenario:  Tell us about yourself, address auto-populate
    Given I have not filled in the address field
    When I enter a valid address into this field
    Then a suggested address will appear
    And clicking this address will populate the related fields, e.g. City, State, Zip code

Scenario:  Tell us about yourself, incomplete form
    Given I have not filled in a required field
    When I try to submit the form
    Then A warning message appears over the missing field

Scenario:  Signup - Verification Code
    Given I have successfully completed the User Info and Tell us about yourself forms
    And I have received a verification code
    When I submit the code
    Then I am taken to the start of the financial health survey

Scenario:  How do you feel about your finances?
    When I select one of the four options
    Then I am taken to the next page

Scenario:  How can we make you feel better about your money? - Choosing categories
    When I select an option, e.g. Setting financial goals
    Then a dropdown appears with additional options
    And a number will appear next to the category, counting the number of 'Anything specific' options I selected
    And I can toggle these dropdowns on or off by clicking the 'plus' or 'minus' signs

Scenario:  How can we make you feel better about your money?  - Something else...
    When I select 'Something else...'
    Then I can submit text, with a 250 character limit
    And going over this limit results in a warning message - 'Character limit reached'

Scenario:  Completing the survey
    Given I have filled in all info on the survey
    When I submit the survey
    Then I am taken to a landing page 'Congratulations, let's start building your profile'
    And clicking next will take me to the Financial Health Homepage
    And I see a modal recommending that I connect my credit score