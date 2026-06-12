import { selectors } from '../../support/Selector';

describe('Create an organization', () => {

  beforeEach(() => {
    cy.session('userSession', () => {
      cy.visit('/');
      cy.login(
        Cypress.env('email'),
        Cypress.env('password')
      );
      cy.contains('Organizations').should('be.visible');
    }, {
      validate() {
        cy.visit('/');
        cy.contains('Organizations').should('be.visible');
      },
      cacheAcrossSpecs: false
    });

    cy.visit('/');
  });
  it('Verify user can create an organization with valid details', () => {
        // cy.xpath(selectors.menu_btn).click();
        cy.xpath(selectors.organization_btn).click();
        cy.xpath(selectors.create_orgn_btn).click();
       cy.xpath(selectors.organization_name).type('Test Organization');
       cy.xpath(selectors.organization_slug).type('test-organization');
       cy.xpath(selectors.OrgStatus).click();
       cy.xpath(selectors.OrgStatusActive).click();
       cy.xpath(selectors.PlanType).click();
       cy.xpath(selectors.PlantypeSuperPro).click();
       cy.get('input[type="file"]')
       .selectFile('cypress/fixtures/image.webp', {
        force: true
       });
      cy.xpath(selectors.crop_and_upload).click();
      //  cy.get('p.para-14.line-clamp-4').should('have.text', 'The Organization has been successfully updated.');
       
       cy.xpath(selectors.admin_fname).type('John');
       cy.xpath(selectors.admin_lname).type('Doe');
       cy.xpath(selectors.admin_email).type('johndoe@gmail.com');
       cy.xpath(selectors.admin_password).type('Password@123');
       cy.xpath(selectors.admin_phone).type('9734567890');
       cy.wait(2000);
       cy.xpath(selectors.save_changes_btn).click();
       //cy.get('.Toastify').should('contain', 'The Organization has been sucessfully created');
    });

  it('Verify user can login from organization URL', () => {

    cy.xpath(selectors.organization_btn).click();
    cy.xpath(selectors.organization_body).first.click();

    cy.xpath(selectors.organization_url)
      .invoke('text')
      .then((orgUrl) => {

        orgUrl = orgUrl.trim();
        cy.log(`Organization URL: ${orgUrl}`);

        expect(orgUrl).to.contain('stage.chairlyo.com');

        const fullUrl = orgUrl.startsWith('http') ? orgUrl : `https://${orgUrl}`;

        // ✅ visit the subdomain
      
        cy.visit(fullUrl);

        // ✅ cy.origin() is MANDATORY in Firefox for cross-origin commands
        cy.origin(fullUrl, () => {
          cy.contains('Login').should('be.visible');
        });

      });
  });

});