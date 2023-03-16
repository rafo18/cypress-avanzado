let texto;
describe('seguridad', () => {
    
    it('navegar entre diferentes dominios', () => {
        cy.visit('/');
    });

    it('navego a un dominio', function() {
        cy.visit('https://todo-cypress-iota.vercel.app/');
        cy.get("h1").invoke("text").as("titulo")
    });
    it('navego a otro dominio', function() {
        cy.visit('https://todo-cypress-iota.vercel.app/');
        cy.log(this.titulo);
    });

    it.only('navego en 2 dominios en un mismo test', function()  {
        cy.visit('/')
        cy.get('h1').first().invoke('text').then( text=> {
            texto = text;
        });
        
        cy.origin('https://todo-cypress-iota.vercel.app/' , {args: {texto}}, function({texto}) {
            cy.visit('/')
            cy.log(texto)
        })
        cy.visit('/')
        cy.get('h1').first().invoke('text').should('equal', "Bulbasaur")


    });
});