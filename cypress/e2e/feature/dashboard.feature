Feature:  Connections to My Finances (MX) from Dashboard and Insights pages
#We want users to aggregate their financial accounts so that we can provide them with a holistic view of their 
#financial picture and deliver differentiated debt management and budgeting services that are so valuable that they 
#(1) regularly engage with the platform, 
#(2) are willing to give us their data that we can then leverage across our businesses, and 
#(3) are willing to pay a fee (eventually).

Background:  Dashboard - First time visitor to MX
    Given I have not added any accounts to My Finances

#======================================================================================================================

Scenario:  Dashboard page
    When I access the dashboard
    Then I see a call-to-action prompting me to access the My Finances page - "It's easier than ever to manage your money"
    And I see a 'NEW' prompt on the My Finances tab

#======================================================================================================================

Scenario:  Dismissing the My Finances (MX) call-to-action (CTA)
    When I click the 'x' on the CTA
    Then the CTA disappears

#======================================================================================================================

Scenario:  Get Started
    When I click 'Let's go'
    Then I'm taken to the My Finances page

#======================================================================================================================

Scenario:  Learn More
    When I click the 'Learn More' link on the MX CTA
    Then A modal appears, explaining BEFH's data protection
    And if I click the 'Okay' button, or the 'X', or outside the modal
    Then it is dismissed

#======================================================================================================================

