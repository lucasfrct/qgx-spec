/// <reference types="cypress" />

describe('WEBAPP', () => {
  before(() => {
    cy.visit('http://localhost:4200/')
  })


  it('login', async() => {

    cy.wait(4000);

    cy.get('#mat-input-0').type("10245523731", { delay: 20 });

    cy.wait(200);

    cy.get('#mat-input-1').type("Aterar123", { delay: 20 });

    cy.wait(200);

    cy.get('.mat-focus-indicator').click();

    cy.wait(2000);


  //   cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
  //   cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  })

});
