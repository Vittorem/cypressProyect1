describe('Testing APIs in ', () => {

    beforeEach(()=>{
        cy.visit('https://automationexercise.com/api_list');
    })

    it('check apis', () => {
        // Realiza una solicitud GET a la API especificada y verifica la respuesta
        cy.request('GET', 'https://automationexercise.com/api/productsList')
            .should((response) => {
                // Verifica que la respuesta tenga un código de estado 200
                expect(response.status).to.eq(200);
            });
    });
});