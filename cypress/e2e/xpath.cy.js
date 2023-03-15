describe('trsbsjsndo con xpath', () => {
    

    it('obtener con un css selector', () => {
        cy.visit("/")
        cy.get(':nth-child(1) > .shadow > center > .card-header').should('contain' , 'Bulbasaur')
    });

    it('obtener con xpath', () => {
        cy.visit('/');
        
    });
});