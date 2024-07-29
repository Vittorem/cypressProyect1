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

        it('ScrollBars', () => {
            cy.contains("Scrollbars").click()
            cy.get('[style="height:150px;overflow-y: scroll;width:300px;overflow-x:scroll"]').scrollTo("center")
            cy.get('#hidingButton').should("be.visible").click()
        });

        it('Dynamic tables', () => {
            cy.contains("Dynamic Table").click()
            // element in yellow is not found
        });

        it('Verify Text', () => {
            cy.contains("Verify Text").click()
            cy.get(".bg-primary").contains("Welcome UserName!").should("be.visible")
        });

        it('Progress Bar', () => {
            cy.contains("Progress Bar").click()
            cy.get('#startButton').click()
            if (cy.get('#progressBar').contains("75%", { timeout: 30000 })) {
              cy.get('#stopButton').click()
            }
        });

        it('Visibility', () => {
            cy.contains("Visibility").click()
            cy.get('#removedButton').should("be.visible")
            cy.get('#zeroWidthButton').should("be.visible")
            cy.get('#overlappedButton').should("be.visible")

            cy.get('#hideButton').click()

            cy.get('#removedButton').should("not.exist"); // Verifica que el botón no existe en el DOM
            cy.get('#zeroWidthButton').should("not.be.visible");
            cy.get('#overlappedButton').should("be.visible"); // is visible but it is covered
        });

        it('Sample App login', () => {
            cy.contains("Sample App").click()
            cy.get('input').first().type("TrollHunter")
            cy.get("input").eq(1).type("pwd")
            cy.get('#login').click()
            cy.contains("Welcome, TrollHunter!").should("be.visible")
        });

        it('Mouse Over', () => {
            cy.contains("Mouse Over").click()
            cy.get('.text-primary').dblclick()
        });

        it('Non breking space', () => {
            cy.contains("Non").click()
            cy.get("button[class='btn btn-primary']").click()
        });

        it('Overlapped Element', () => {
            cy.contains("Overlapped").click()
            cy.get('#id').type("12345")
            cy.get('[style="overflow-y: scroll; height:100px;"]').scrollTo("bottom")
            cy.get('#name').type("Vittorem")
        });

        // it.only('Shadow DOM', () => {
        //     cy.contains("Shadow").click()
        //     cy.get('guid-generator').mouse
        // });
    });

