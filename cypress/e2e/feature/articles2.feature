Feature: Knowledge Center
#Users can filter and see the specific search on the article's page and navigate through the pages as well

Background: Knowledge Center, Article Page
    Given i have navigated to a specific article page

#=========================================================================================================================    

Scenario: Article pagination
    When i click Previous Article or Next Article
    Then i am taken to the next article in the list, or the previous

#=========================================================================================================================

Scenario: Search articles
    When i submit a Search
    Then i am taken back to the Knowledge Article homepage
    And my search criteria has been submitted here
    And articles are filtered based upon my search criteria

#=========================================================================================================================

Scenario: Recent blog posts
    When i click on an article link beneath the search bar, under 'Recent Blog Posts'
    Then i am taken to that Article's page