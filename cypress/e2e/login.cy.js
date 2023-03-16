import { loginPage } from "../pageObject/loginPage";

describe('logincon pom', () => {
    beforeEach( () => {
        loginPage.visit()
    })
    it('login erroneo', () => {
        loginPage.validateLoginPage
        loginPage.login('aaa' , 'vvv')
        loginPage.validateErrorLogin()
    });
    it('login exitoso', () => {
        loginPage.login('username' , 'password');
        loginPage.validatesuccesLogin();
    });
});