const {
    Given,
    When,
    Then
} = require("@badeball/cypress-cucumber-preprocessor");
const { loginPage } = require("../../../pageObject/loginPage")


Given ('I am on the home page', ()=>{
    loginPage.validatesuccesLogin()
})

When ('I click on the account activity nav' , ()=> {
    cy.contains("Account Activity").click()
})

Then('I should see the account activity content', ()=>{
    cy.contains("Show Transactions").should('be.visible')

})