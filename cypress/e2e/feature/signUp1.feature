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
