Feature: Login Outline

Scenario Outline: Login with invalid credentials
Given I am on the login page
And I fill in my email and password with <user> and <pass>
Then I should validate that i am not logged in

Examples:
    | user       |  pass      | 
    | username3  | password3  | 
    | username2  | password2  | 
    | username1  | password1  | 
