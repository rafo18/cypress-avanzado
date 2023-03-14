describe('Dispositivos moviles', () => {
    it('Usando el viewport', () => {
        cy.viewport(1280 , 720)
        cy.visit('/')
        cy.contains('Safari').should('exist')
    });

    it('Usando el viewport 2', () => {
        cy.viewport(375, 667)
        cy.visit('/')
        cy.contains('Safari').should('not.be.visible')
    });

    it('Usando el viewport 3', () => {
        cy.viewport('macbook-15')
        cy.visit('/')
        cy.contains('Safari').should('exist')
    });
    it('Usando el viewport 4', () => {
        cy.viewport('iphone-6+')
        cy.visit('/')
        cy.contains('Safari').should('not.be.visible')
    });
    
});