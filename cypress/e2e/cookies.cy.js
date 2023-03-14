

describe('Cookies', () => {
    
    it('obtener cookies', () => {
        cy.visit('/');
        cy.getCookies().should("be.empty");
    });

    it.only('agregar cookies', () => {
        cy.session((session) => {
            session.cookies.preserveOnce("nombre");
          });
        cy.setCookie('nombre', 'rafael')
        cy.getCookies().should('have.length' , 1)
    });

    it('obtener una cookie en especifico', () => {
        
        cy.getCookie('nombre').should('have.a.property' , 'value' , 'rafael')
    });
    
});