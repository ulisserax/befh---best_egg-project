Feature:  MX Page - Accounts connected
#My Finances page, after users have connected accounts

Background:  Reviewing My Finances
    Given I have connected bank accounts
    And I am on the MX page

#======================================================================================================================

Scenario:  Accounts tab
    When I access MX
    Then I can see my accounts listed under 'All Accounts'
    And I can toggle between the accounts by clicking them

#======================================================================================================================

Scenario:  Account details
    When I select an account within the central table, e.g. X Bank Checking
    Then a side drawer tab opens, displaying current and available balance, as well as a table of transactions for this account

#======================================================================================================================

Scenario:  Filter Accounts menu
    When I click the Filter Accounts button
    Then a filter menu appears
    And I can select the accounts I want to see, individually or as a group using 'All'

#======================================================================================================================

Scenario:  Filtering Accounts
    Given I have opened the filter accounts menu
    When I select accounts and click 'Apply'
    Then the selected accounts appear in the table

#======================================================================================================================

Scenario:  Investigate a transaction
    Given I have toggled the details table for an account
    When I click on the row for a transaction
    Then a page opens within the frame, showing details of the transaction