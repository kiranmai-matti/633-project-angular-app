import {slowCypressDown} from 'cypress-slow-down'

slowCypressDown()


before(() => {
  cy.visit('/home')
})
describe('Cypress Test for Login', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('Customer Successful Login', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.mat-menu-trigger > .mat-button-wrapper > .mat-icon').click();
    cy.get('[routerlink="/login"]')
      .should('have.text', ' Sign In ')
      .should('have.attr', 'routerlink', '/login');
    cy.get('[routerlink="/login"]').click();
    cy.get('.mat-card-title')
      .should('have.class', 'mat-card-title')
      .should('have.text', 'Sign In');
    cy.get('div.form-element > .mat-focus-indicator').should('be.disabled');
    cy.get('[data-cy="username"]').type('bestbuy@gmail.com');
    cy.get('[data-cy="password"]').type('1234');
    cy.get('div.form-element > .mat-focus-indicator').should('be.enabled');
    cy.get('div.form-element > .mat-focus-indicator > .mat-button-wrapper').should('have.text', 'Login');
    cy.get('div.form-element > .mat-focus-indicator').click();
    cy.get('span.ng-star-inserted').should('contain.text', 'Welcome');
    cy.get('span.ng-star-inserted').should('be.visible');
    cy.get('.mat-menu-trigger > .mat-button-wrapper > .mat-icon').click();
    cy.get('.mat-menu-content > :nth-child(1)').should('have.text', 'My Account');
    cy.get('.mat-menu-content > :nth-child(1)').click();
    cy.get('.mat-card-title')
      .should('have.text', 'Customer Account Details')
      .should('be.visible');
    cy.get('.mat-menu-trigger > .mat-button-wrapper > .mat-icon').click();
    cy.get('.mat-menu-content > :nth-child(2)').should('have.text', 'Logout');
    cy.get('.mat-menu-content > :nth-child(2)').click();
    /* ==== End Cypress Studio ==== */
  });
  it('Customer Unsuccessful Login', function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.mat-menu-trigger > .mat-button-wrapper > .mat-icon').click();
    cy.get('[routerlink="/login"]')
      .should('have.text', ' Sign In ')
      .should('have.attr', 'routerlink', '/login');
    cy.get('[routerlink="/login"]').click();
    cy.get('.mat-card-title')
      .should('have.class', 'mat-card-title')
      .should('have.text', 'Sign In');
    cy.get('div.form-element > .mat-focus-indicator').should('be.disabled');
    cy.get('[data-cy="username"]').type('bestbuy@gmail.com');
    cy.get('[data-cy="password"]').type('1');
    cy.get('div.form-element > .mat-focus-indicator').should('be.enabled');
    cy.get('div.form-element > .mat-focus-indicator > .mat-button-wrapper').should('have.text', 'Login');
    cy.get('div.form-element > .mat-focus-indicator').click();
    /* ==== End Cypress Studio ==== */
  });
})


