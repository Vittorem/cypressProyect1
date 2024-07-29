describe('UItestingPlaygorund', () => {

  //Login into the landing page
  beforeEach(() => {
    cy.visit('/');
  })

  it('Enter to the page', () => {
    cy.url().should("be.eq", "http://www.uitestingplayground.com/")
  })

  it('Dynamik Id', () => {
    cy.contains("Dynamic").click()
    cy.contains("Button with Dynamic ID").click()
    });

    it('Button by class', () => {
      cy.contains("Class").click()
      cy.get('.class1').click();
      cy.get('.class2').click()
      cy.get('.class3').click()
    });

    it('Hidden Layers', () => {
        cy.contains("Hidden").click()
        cy.get('#greenButton').click()
        cy.get('#greenButton').click({force:true})
        cy.contains("User can not click green button in the current application state!").should("be.visible")
    });

    it('Load Delay', () => {
        cy.contains("Load").click()
        cy.get('.btn').should("be.visible").click()
    });

    it('Wait for Ajax Data', () => {
      cy.intercept("GET", "http://www.uitestingplayground.com/ajax").as("ajaxData")
        cy.contains("AJAX").click()
        cy.get('.btn').click()
        cy.wait(16000)
        cy.wait("@ajaxData").then(({ response }) => {
          // Verificar que la respuesta tenga el estado 200
          expect(response.statusCode).to.equal(200);
        })
        cy.contains("Data loaded with AJAX get request.").should("be.visible")
    });

    it('Client Side Delay', () => {

      //Against the past test in this one the delay is in the client side, so it does not throw a 200 response
        cy.contains("Client").click()
        cy.get('#ajaxButton').click()
        cy.wait(16000)
        cy.contains("Data calculated on the client side.").should("be.visible")
        })

        it('Click', () => {
            cy.contains("Click").click()
            cy.get('#badButton').click()
            cy.get('#badButton').click({force:true})
        });

        it('Text Input', () => {
            cy.contains("Text Input").click()
            cy.get('#newButtonName').type("New Name")
            cy.get('#updatingButton').click()
            cy.get('#updatingButton').should("have.text", "New Name")
        });

        it.only('ScrollBars', () => {
            cy.contains("Scrollbars").click()
            cy.get('[style="height:150px;overflow-y: scroll;width:300px;overflow-x:scroll"]').scrollTo("center")
            cy.get('#hidingButton').should("be.visible").click()
        });
    });

