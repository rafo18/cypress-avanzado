//para compartir codigo del background se mueve la carpeta login a step_definitions

Feature: NavigationBar

Background: 
Given I am on the login page
And I fill in my email and password with username and password

Scenario: Navigate to the feature navigation bar
Given I am on the home page
When I click on the account activity nav
Then I should see the account activity content