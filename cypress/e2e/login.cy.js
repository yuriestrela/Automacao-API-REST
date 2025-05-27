describe('Login', () => {

    beforeEach(() => {
        cy.visit('https://automationpratice.com.br/login');
        // cy.get('a[href="/login"]').first().click();
        
    });    
    it('Login com sucesso', () => {

        cy.get('#user').type('yuri@qa.com');
        cy.get('#password').type('123456');
        cy.get('#btnLoginnnnn').click();

        // cy.get('#swal2-title').should('be.visible');
        cy.get('#swal2-title').should('have.text', 'Login realizado');
    });

    it('E-mail inválido', () => {
        cy.get('#user').type('teste');
        cy.get('#password').type('123456');
        cy.get('#btnLogin').click();

        cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
    });

    it('Senha inválido', () => {
        cy.get('#user').type('teste@qa.com');
        cy.get('#password').type('123');
        cy.get('#btnLogin').click();

        cy.get('.invalid_input').should('have.text', 'Senha inválida.');
    });

    it('E-mail vazio', () => {
        cy.get('#password').type('123456');
        cy.get('#btnLogin').click();

        cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
    });

    it('Senha vazia', () => {
        cy.get('#user').type('teste@qa.com');
        cy.get('#btnLogin').click();

        cy.get('.invalid_input').should('have.text', 'Senha inválida.');
    });

    it('E-mail e senha vazios', () => {
        cy.get('#btnLogin').click();

        cy.get('.invalid_input').should('have.text', 'E-mail inválido.');
    });
});
