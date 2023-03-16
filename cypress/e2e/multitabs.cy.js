describe('navegando entre diferentes tabs', () => {
    it('visitar links que tengan el target_blank', () => {
        cy.visit('https://demoqa.com/links');
        cy.get('#simpleLink').click();
    });

    it.only('abrir la pagina dentro de la misma ventana', () => {
        cy.visit('https://demoqa.com/links');

        cy.get('#simpleLink').invoke('removeAttr', 'target').click()
        
    });
});