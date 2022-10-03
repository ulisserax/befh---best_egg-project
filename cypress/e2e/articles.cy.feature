Feature: Knowledge Center

#Users should login and see the homepage with a popup inviting to explore the webpage
#Users should access the Financial Health page to access the articles
#Users can search for articles from the Knowledge Center page, as well as on article pages themselves

Scenario: Accessing the Login Page
    Given I access the BestEgg login page
    When I login on the page
    Then I see a popup as a guideline
    Then I see the homepage

#======================================================================================================================

Scenario: All articles, published date organized
    Given I am at the Financial Health Page
    When I click on the Knowledge Center Page
    When I have not entered any text into search
    Then All articles are displayed
    And The article thumbnails are organized by the date they were published, with the most recent articles first

#======================================================================================================================

Scenario: Opening an article

    When I click on an article thumbnail
    Then I am taken to that article's page
    And The page's hero image, content text, and content links load successfully
    And I can navigate back to the Knowledge Center by clicking on the 'back' icon at the top left

#======================================================================================================================

Scenario: Searching for an article from the Knowledge Center homepage

    When I submit text to the search bar
    Then I am served articles which match my search
    And I can submit a new search

#======================================================================================================================

Scenario: Clearing search results

    When I submit a search
    And I then clear the text from the search bar
    Then All articles are visible
    And The articles are organized by the date they were published

#======================================================================================================================

Scenario: Article Page

    When I have navigated to a specific article page

#======================================================================================================================

Scenario: Article pagination

    When I click Previous Article or Next Article
    Then I am taken to the next article in the list, or the previous

#======================================================================================================================

Scenario: Search articles

    When I submit a search
    Then I am taken back to the Knowledge Article homepage
    And My search criteria has been submitted here
    And Articles are filtered based upon my search criteria

#======================================================================================================================

Scenario: Recent blog posts

    When I click on an article link beneath the search bar, under 'Recent Blog Posts'
    Then I am taken to that article's page