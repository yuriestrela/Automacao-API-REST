describe('Teste de API', () => {

    it('Buscar dispositivo  existente', () => {
        cy.request({
            method: "GET",
            url: "https://api.restful-api.dev/objects/10"
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.id).to.equal("10")
        })
    });

    it('Buscar dispositivo  inexistente', () => {
        cy.request({
            method: "GET",
            url: "https://api.restful-api.dev/objects/214214210",
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(404)
            expect(response.body.error).to.equal("Oject with id=214214210 was not found.")
        })
    });

    it('Cadastrar dispositivo', () => {
        cy.request({
            method: "POST",
            url: "https://api.restful-api.dev/objects",
            body: {
                "name": "Lenovo do Yuri",
                "data": {
                    "year": 2025,
                    "price": 3000.00,
                    "CPU model": "Intel Core i5",
                    "Hard disk size": "500 GB"
                }
            }
        }).then((response) => {
            expect(response.status).to.equal(200)

            // Exibe a resposta no console
            cy.log(JSON.stringify(response.body))
            console.log(response.body)
        })
    });

    it('Atualizar cadastro', () => {
        cy.request({
            method: "PUT",
            url: "https://api.restful-api.dev/objects/ff808181932badb601959a112630534f",
            body: {
                "name": "Notebook do Yuri",
                "data": {
                    "year": 2025,
                    "price": 3000.00,
                    "CPU model": "Intel Core i5",
                    "Hard disk size": "1 GB"
                }
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            
            cy.log(JSON.stringify(response.body))
            console.log(response.body)
        })
    });
});
