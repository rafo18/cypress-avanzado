const {
    Given,
    When,
    Then,
} = require("@badeball/cypress-cucumber-preprocessor");
const { loginPage } = require("../../../pageObject/loginPage")

Given( 'I am on the login page' , ()=> {
    loginPage.visit()
    loginPage.validateLoginPage()
});

When ('I fill in my email and password with username and password', () => {
    loginPage.login('username' , 'password')
    
})
Then ('I should validate that i am logged in', () => {
    loginPage.validatesuccesLogin()
})
