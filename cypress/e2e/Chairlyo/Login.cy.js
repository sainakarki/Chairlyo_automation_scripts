 import { selectors } from '../../support/Selector';

describe('Login Page', () => {

  beforeEach(() => {
    cy.visit('https://stage.chairlyo.com/');
  });

  afterEach(() => {
    cy.log("Test completed");
  });

  it('Verify user login with valid credentials', () => {
    cy.xpath(selectors.email).clear().type("admin@gmail.com");
    cy.xpath(selectors.login_password).clear().type("adminpassword");
    cy.xpath(selectors.login_btn).click();

    cy.get('.Toastify').should('contain', 'Login successful!');
  });

  it('Verify user cannot login with invalid credentials', () => {
    cy.xpath(selectors.email).clear().type("abc@gmail.com");
    cy.xpath(selectors.login_password).clear().type("abc123");
    cy.xpath(selectors.login_btn).click();
    cy.get('.Toastify').should('contain', 'Invalid credentials');
  });

  it('Verify user cannot login with empty credentials fields', () => {
    cy.xpath(selectors.login_btn).click();

    cy.contains('Invalid email address').should('be.visible');
    cy.contains('Password is required').should('be.visible');
  });

  it('Verify that the password field is not case-sensitive', () => {
    cy.xpath(selectors.email).clear().type("admin@gmail.com");
    cy.xpath(selectors.login_password).clear().type("ADMINPASSWORD");
    cy.xpath(selectors.login_btn).click();

    cy.get('.Toastify').should('contain', 'Invalid credentials');
  });

  it('Verify login with valid credentials and remember me checkbox', () => {

    cy.xpath(selectors.email).clear().type("admin@gmail.com");
    cy.xpath(selectors.login_password).clear().type("adminpassword");

    cy.xpath(selectors.remember_me)
      .check()
      .should('be.checked');

    cy.xpath(selectors.login_btn).click();

    cy.get('.Toastify').should('contain', 'Login successful!');

    cy.contains('Dashboard').should('be.visible');

    cy.reload();

    cy.contains('Dashboard').should('be.visible');
  });
  it.skip('Verify that logout clears Remember Me session', () => {
  cy.xpath(selectors.email).clear().type("admin@gmail.com");
  cy.xpath(selectors.login_password).clear().type("adminpassword");
  cy.xpath(selectors.remember_me).check().should('be.checked');
  cy.xpath(selectors.login_btn).click();
  cy.get('.Toastify').should('contain', 'Login successful!');
  cy.contains('Dashboard').should('be.visible');
  cy.xpath(selectors.logout_btn).click();
  cy.xpath(selectors.logout_confirm_btn).click();
  cy.contains('Login').should('be.visible');
  cy.reload();
  cy.contains('Dashboard').should('not.exist');
 });
});