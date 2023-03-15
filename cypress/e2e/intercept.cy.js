describe('interceptando network request', () => {
    it('repaso de request', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').then((resp) => {
        expect(resp.body).to.have.property("name" , "ditto")
        expect(resp.status).to.eq(200)
        cy.log("holaa" , resp.body)
        })
    });

    it('prueba de intercept', () => {
        cy.intercept('GET' , 'https://pokeapi.co/api/v2/pokemon-species/1').as('bulbasaur')

        cy.visit('/');

        cy.contains('Bulbasaur')
    });
    
});