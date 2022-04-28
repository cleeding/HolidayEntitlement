Feature: Calculating holiday entitlement on GOV UK website
    I want to calculate holiday entitlement on GOV UK website

    Scenario Outline: Calculating holiday entitlement

        Given I open the Home Page for Holiday Entitlement
        Then The title should be correct
        And I click on the start now button
        And The employment contract page is loaded
        And I select days worked per week and continue
        And I select for a full year and continue
        When I enter '<Day>' days and continue
        Then The page should display '<Expected>' days holiday

        Examples:
            | Day | Expected |
            | 1   | 5.6      |
            | 2   | 11.2     |
            | 3   | 16.8     |
            | 4   | 22.4     |
            | 5   | 28       |

    Scenario Outline: Entering invalid number of days

        Given I open the Home Page for Holiday Entitlement
        And I click on the start now button
        And The employment contract page is loaded
        And I select days worked per week and continue
        And I select for a full year and continue
        When I enter '<InvalidDay>' days and continue
        Then The page should display page validation for only 7 days in a week

        Examples:
            | InvalidDay |
            | 0          |
            | -5         |
            | 366        |

    Scenario Outline: Checking end date cannot be more than 1 year before start date

        Given I open the Home Page for Holiday Entitlement
        And I click on the start now button
        And The employment contract page is loaded
        And I select days worked per week and continue
        And I select someone starting part way and continue
        And I enter '<StartDay>' in day field '<StartMonth>' in month field and '<StartYear>' in year field and continue
        When I enter '<EndDay>' in day field '<EndMonth>' in month field and '<EndYear>' in year field and continue
        Then The page should display 1 year between start date and end date page validation

        Examples:
            | StartDay | StartMonth | StartYear | EndDay | EndMonth | EndYear |
            | 12       | 12         | 2999      | 01     | 01       | 1969    |
