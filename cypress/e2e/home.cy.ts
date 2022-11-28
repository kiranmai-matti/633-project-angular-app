import {slowCypressDown} from 'cypress-slow-down'

slowCypressDown()

before(() => {
  cy.visit('/home')
})
describe('Cypress Test for Home Page', () => {
  /* ==== Test Created with Cypress Studio ==== */
  it('Home Page Test', function () {
    cy.get('.mat-button > .mat-button-wrapper').should('contain.text', 'Electronics Store');
    cy.get('.mat-toolbar').should('have.class', 'mat-primary');
    cy.get(':nth-child(1) > .mat-card-title').should('have.text', 'Laptops');
    cy.get(':nth-child(1) > .mat-card-avatar').should('have.attr', 'src', './assets/Category_201.jpg');
    cy.get(':nth-child(2) > .mat-card-title').should('have.text', 'Desktops');
    cy.get(':nth-child(2) > .mat-card-title').should('have.class', 'mat-card-title');
    cy.get(':nth-child(2) > .mat-card-avatar').should('have.attr', 'src', './assets/Category_202.jpg');
    cy.get(':nth-child(3) > .mat-card-title').should('have.text', 'Tablets');
    cy.get(':nth-child(3) > .mat-card-avatar').should('have.attr', 'src', './assets/Category_203.jpg');
    cy.get(':nth-child(3) > .mat-card-title').should('have.class', 'mat-card-title');
    cy.get(':nth-child(4) > .mat-card-title').should('have.text', 'Cell Phones');
    cy.get(':nth-child(4) > .mat-card-avatar').should('have.attr', 'src', './assets/Category_204.jpg');
    cy.get(':nth-child(4) > .mat-card-title').should('have.class', 'mat-card-title');
    cy.get(':nth-child(5) > .mat-card-title').should('have.text', 'Wearable Technology');
    cy.get(':nth-child(5) > .mat-card-title').should('have.class', 'mat-card-title');
    cy.get(':nth-child(5) > .mat-card-avatar').should('have.attr', 'src', './assets/Category_205.jpg');
    cy.get(':nth-child(6) > .mat-card-title').should('have.text', 'TV');
    cy.get(':nth-child(6) > .mat-card-avatar').should('have.attr', 'src', './assets/Category_206.jpg');
    cy.get('.mat-menu-trigger > .mat-button-wrapper > .mat-icon').should('have.text', 'account_circle');
    cy.get('.last-item > .mat-button-wrapper').should('contain.text', 'Cart');
    cy.get('.mat-menu-trigger > .mat-button-wrapper > .mat-icon').click();
    cy.get('[routerlink="/login"]').should('have.text', ' Sign In ');
    cy.get('[routerlink="/login"]').should('have.attr', 'routerlink', '/login');
    cy.get('[routerlink="/login"]').should('have.attr', 'ng-reflect-router-link', '/login');
    cy.get('[routerlink="/register"]').should('have.text', ' Sign Up ');
    cy.get('[routerlink="/register"]').should('have.attr', 'routerlink', '/register');
    cy.get('[routerlink="/register"]').should('have.attr', 'ng-reflect-router-link', '/register');
    /* ==== End Cypress Studio ==== */
  });
})
