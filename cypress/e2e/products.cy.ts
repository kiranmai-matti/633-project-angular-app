import {slowCypressDown} from 'cypress-slow-down'

slowCypressDown()

before(() => {
  cy.visit('/home')
})
describe('Cypress Test for Products Page', () => {

  /* ==== Test Created with Cypress Studio ==== */
  it('Displaying Products Test', function () {
    cy.get(':nth-child(1) > .mat-card-avatar').click();
    cy.get(':nth-child(1) > .grid-item > .prd-title').should('have.class', 'prd-title');
    cy.get(':nth-child(1) > .grid-item > .prd-title').should('have.text', 'MacBook Pro 14" Laptop - Apple M1 Pro chip - 16GB Memory - 512GB SSD (Latest Model) - Space GraySKU :6450853Price: $1999Add to CartView More Details');
    cy.get(':nth-child(1) > .grid-item > .img-card').should('have.class', 'img-card');
    cy.get(':nth-child(1) > .grid-item > .img-card').should('have.attr', 'src', 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6450/6450853_sd.jpg');
    cy.get(':nth-child(1) > .grid-item > .prd-title > [style="font-weight: 500; margin-top: 50px;"]').should('have.text', 'Price: $1999');
    cy.get(':nth-child(1) > .grid-item > .prd-title > .mat-card-actions > .add-cart > .mat-button-wrapper').should('have.text', 'Add to Cart');
    cy.get(':nth-child(1) > .grid-item > .prd-title > .mat-card-actions > [style="background-color: #0046be; color: white;"] > .mat-button-wrapper').should('have.text', 'View More Details');
    cy.get(':nth-child(1) > .grid-item > .prd-title > [style="font-weight: 500; margin-top: 50px;"]').click();
    cy.get('.title > b').should('have.text', 'MacBook Pro 14" Laptop - Apple M1 Pro chip - 16GB Memory - 512GB SSD (Latest Model) - Space Gray');
    cy.get('p > b').should('have.text', 'Description: ');
    cy.get('.desc > :nth-child(1)').should('have.text', 'Description: The new MacBook Pro delivers game-changing performance for pro users. With the powerful M1 Pro to supercharge pro-level workflows while getting amazing battery life.¹ And with an immersive 14-inch Liquid Retina XDR display and an array of pro ports, you can do more than ever with MacBook Pro');
    cy.get('.mat-card-title').should('have.text', 'Price: $1999');
    cy.get('.mat-card-actions > .mat-focus-indicator > .mat-button-wrapper').should('have.text', 'Add to Cart');
    /* ==== End Cypress Studio ==== */
  });
})
