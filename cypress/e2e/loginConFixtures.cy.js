const { loginPage } = require("../pageObject/loginPage");

describe('login con fixtures', () => {
    beforeEach(() => {
        loginPage.visit()    
    });

    it('login erroneo', () => {
        loginPage.validateLoginPage();
        cy.fixture("credentials").then(cred => {
            loginPage.login(cred.email , cred.password)
        })

        loginPage.validateErrorLogin()
    });

    it('login erroneo 2', () => {
        loginPage.validateLoginPage()
        cy.fixture("usuarios").then( cred => {
            loginPage.login(cred.email , cred.password)
            loginPage.validateErrorLogin()
        })
    });
});

const credentialsForUsers = [
    {
        nombre: "credentials",
        titulo: "Login con credentials",
    },
    {
        nombre: "usuarios",
        titulo: "Login con users",
    }
];


credentialsForUsers.forEach( credentials => {
    describe.only(credentials.titulo, () => {
        beforeEach(() => {
            loginPage.visit();
        })

        it('login erroneo con fixture', () => {
            loginPage.validateLoginPage();
            cy.fixture(credentials.nombre).then(cred => {
                loginPage.login(cred.email , cred.password)
                loginPage.validateErrorLogin()
            })
        });
    });
})


