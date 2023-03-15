describe('flaky testr', () => {
    
    it('single query', () => {
        cy.visit("/")
        cy.get(':nth-child(1) > .shadow > center > .card-header').should('contain' , 'Bulbaaasaur')
    });

    it.only(' alternar comando con aserciones ', () => {
        cy.visit("/")
        // cy.get('#submit').click() // en formularios puede dar un error porque el boton submit puede estar deshabilitado hasta llenar el formulario
        // cy.get('#submit').should('not.be.disabled').click() // va a comprobar que el boton submit este habilitado antes de dar un click
    });
});