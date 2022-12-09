Feature:  Insights Homepage, Existing User
#Users can review their debt-to-income ratio, borrowing power, and credit utilization

Background:  Navigating the homepage, existing financial data
    Given I have connected my VantageScore
    And I am on the Insights homepage

#======================================================================================================================
Scenario:  DTI Ratio
    When I click the arrow icon next to "Debt-to-income ratio"
    Then I am taken to the DTI page
    And I can see a DTI ratio bar, which matches the ratio listed on the insights homepage
    And I see a "You and Your Peers" section, which compares my DTI to other Best Egg applicants
    And I can see a "Why is this so important" section
    And I can see a "What you can do" section
    And clicking the arrow next to "Debt-to-income ratio" returns me to the insights homepage

#======================================================================================================================
Scenario:   Borrowing Power
    When I click "Calculate my borrowing power"
    Then a modal appears, where I can enter "Monthly debt payments", "Gross monthly income", and "VantageScore"\
    And my monthly debt payments and gross monthly income data is already populated
    And the VantageScore field is empty

#======================================================================================================================
Scenario:  Credit Utilization
    When I click the arrow next to "Credit utilization"
    Then I am taken to the credit utilization page
    And I can see a section that shows my credit utilization as a percentage e.g. 50%, along with credit used and available credit
    And I can see a section "You and Your Peers" that compares my credit utilization to other Best Egg applicants
    And I can see a "Why is this so important" section
    And I can see a "What you can do" section
    And clicking the arrow next to "Credit utilization" returns me to the insights homepage
