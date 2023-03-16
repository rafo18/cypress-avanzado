import cypress from "cypress";
import { loginPage } from "../pageObject/loginPage";

describe('logincon pom', () => {
    beforeEach( () => {
        loginPage.visit()
    })
    it('login erroneo', () => {
        loginPage.validateLoginPage()
        loginPage.login('aaa' , 'vvv')
        loginPage.validateErrorLogin()
    });
    it('login exitoso', () => {
        loginPage.login('username' , 'password');
        loginPage.validatesuccesLogin();
    });
    it('login exitoso con cy.env', () => {
        loginPage.validateLoginPage();
        cy.log(Cypress.env());
        

    });
});