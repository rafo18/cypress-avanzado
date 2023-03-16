describe('Login con custom command', () => {
    
    it('login erroneo', () => {
        cy.login('usernasddame' , 'passwordasdd')
    });
    it('login exitoso', () => {
        cy.login('username' , 'password')
        
    });
});