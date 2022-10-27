Feature: Test the search feature using the word "login"

    As a valid user
    I want to search "login" in to search feature website
    Scenario: search feature with word "login"
        Given I open the website and the website is visible
        When I clicked on the search feature using the word bank
        Then I see search results containing the word bank