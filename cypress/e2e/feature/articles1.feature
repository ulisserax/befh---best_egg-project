Feature: Knowledge Center
#Users can search for articles from the Knowledge Center page, as well as on article pages themselves

Background: Knowledge Center Homepage
    Given i am on the Knowledge Center page

#=========================================================================================================================

Scenario: All articles, no search filter
    Given i have not entered any text into search
    Then all articles are displayed
    And the article thumbnails are organized by the date they were published, with the most recent articles first

#=========================================================================================================================

Scenario: Opening an article
    When i click on an article thumbnail
    Then i am taken to that article's page
    And the page's hero image, content text, and content links load successfully
    And i can navigate back to the Knowledge Center by clicking on the 'back' icon at the top left

#=========================================================================================================================

Scenario: Searching for an article from the Knowledge Center homepage
    When i submit text to the search bar
    Then i am served articles which match my search
    And i can submit a new search

#=========================================================================================================================

Scenario: Clearing search results
    When i submit a search
    And i then clear the text from the search bar
    Then all articles are visible
    And the articles are organized by the date they were published
