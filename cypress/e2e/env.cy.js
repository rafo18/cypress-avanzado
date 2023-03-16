import { loginPage } from "../pageObject/loginPage";

describe('erroneo con configuracion',
{
    env: {
        usuarioError: "error1",
        passwordError: "error2",
    }
},
() => {

    beforeEach( ()=> {
        loginPage.visit()
    })
    it('login con configuracion',() => {
        loginPage.validateLoginPage()
        cy.log(Cypress.env())

        loginPage.login(
            Cypress.env("usuarioError"),
            Cypress.env("passwordError")
        )
        loginPage.validateErrorLogin();
    });
});