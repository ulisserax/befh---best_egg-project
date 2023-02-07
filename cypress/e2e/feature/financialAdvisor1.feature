Feature:  Financial Coach - Coming Soon
#Users who arrive on this page can sign up for notifications, offer feedback on this service

Scenario:  Dashboard link
    Given I am on the Financial Health homepage
    When I click 'Check it out', under 'Get Personalized guidance from a financial coach'
    Then I am taken to the Financial Coach page

#======================================================================================================================

Scenario:  Notify me
    Given i am on the Financial Coach page
    When I click on 'Notify me'
    Then the button changes to 'We'll be in touch'

#======================================================================================================================