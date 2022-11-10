Feature:  Connections to My Finances (MX) from Dashboard and Insights pages
#We want users to aggregate their financial accounts so that we can provide them with a holistic view of their 
#financial picture and deliver differentiated debt management and budgeting services that are so valuable that they 
#(1) regularly engage with the platform, 
#(2) are willing to give us their data that we can then leverage across our businesses, and 
#(3) are willing to pay a fee (eventually).

Background:  Insights - First time visitor to MX
    Given i have not added accounts to My Finances

#======================================================================================================================

Scenario:  Insights page
    When i access the insights page
    Then i see a call-to-action for the My Finances page

#======================================================================================================================

Scenario:  Dismissing the My Finances (MX) call-to-action (CTA)
    When i click the 'x' on the CTA
    Then the CTA is dismissed

#======================================================================================================================

Scenario:  Get Started
    When i click 'Let's go'
    Then i'm taken to the My Finances page

#======================================================================================================================

Scenario:  Learn More
    When i click the 'Learn More' link on the MX CTA
    Then a modal appears, explaining BEFH's data protection
    And if i click the 'Okay' button, or the 'X', or outside the modal
    Then it's dismissed