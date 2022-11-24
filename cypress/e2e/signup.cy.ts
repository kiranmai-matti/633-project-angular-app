import {slowCypressDown} from 'cypress-slow-down'

slowCypressDown()

before(() => {
  cy.visit('/home')
})
describe('Cypress Test for Sign Up', () => {

  /* ==== Test Created with Cypress Studio ==== */
  it('Customer Sign Up Test', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.mat-menu-trigger > .mat-button-wrapper > .mat-icon').click();
    cy.get('[routerlink="/register"]')
      .should('have.text', ' Sign Up ')
      .should('have.attr', 'routerlink', '/register')
      .should('have.attr', 'ng-reflect-router-link', '/register');
    cy.get('[routerlink="/register"]').click();
    cy.get('div.form-element > .mat-focus-indicator').should('be.disabled');
    cy.get('#mat-input-0').type('Qwerty');
    cy.get('#mat-input-1').clear();
    cy.get('#mat-input-1').type('Test');
    cy.get('#mat-input-2').clear();
    cy.get('#mat-input-2').type('1234567890');
    cy.get('#mat-input-3').clear();
    cy.get('#mat-input-3').type('qwerty@gmail.com');
    cy.get('#mat-input-4').clear();
    cy.get('#mat-input-4').type('1234');
    cy.get('div.form-element > .mat-focus-indicator').should('be.enabled');
    cy.get('div.form-element > .mat-focus-indicator > .mat-button-wrapper').should('have.text', 'Sign Up');
    cy.get('div.form-element > .mat-focus-indicator').should('have.attr', 'color', 'primary');
    cy.get('div.form-element > .mat-focus-indicator > .mat-button-wrapper').click();
    /* ==== End Cypress Studio ==== */
  });
})
