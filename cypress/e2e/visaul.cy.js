
//primero se instala dependencia snapshot con npm i -D cypress-image-snapshot --legacy-peer-deps, kuego se tiene que configurar commands.js y el cypress.config.js

describe('visual testing', () => {
    it('mi primera prueba de regresion', () => {
        cy.visit('/')
        // cy.wait(1000)
        // cy.matchImageSnapshot()
    });
});