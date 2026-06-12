import { selectors } from '../../support/Selector';

describe('Create an organization', () => {
  
    const randomNum = Math.floor(Math.random() * 100000);

    const orgName = `Test Organization ${randomNum}`;
    const orgSlug = `test-organization-${randomNum}`;
    const email = `johndoe${randomNum}@gmail.com`;

    beforeEach(() => {

        cy.session('userSession', () => {

            cy.visit('/');

            cy.login(
                Cypress.env('email'),
                Cypress.env('password')
            );

            // Verify login was successful before saving session
            cy.contains('Organizations').should('be.visible');

        }, {

            validate() {
                cy.visit('/');

                // Verify user is still logged in
                cy.contains('Organizations').should('be.visible');
            },

            cacheAcrossSpecs: false
        });

        cy.visit('/');
    });

    it('Verify user can create an organization with valid details', () => {

    cy.xpath(selectors.organization_btn).click();
    cy.xpath(selectors.create_orgn_btn).click();

    cy.xpath(selectors.organization_name).type(orgName);
    cy.xpath(selectors.organization_slug).type(orgSlug);

    cy.xpath(selectors.OrgStatus).click();
    cy.xpath(selectors.OrgStatusActive).click();

    cy.xpath(selectors.PlanType).click();
    cy.xpath(selectors.PlantypeSuperPro).click();

    cy.get('input[type="file"]').selectFile(
        'cypress/fixtures/image.webp',
        { force: true }
    );

    cy.xpath(selectors.crop_and_upload).click();
    cy.wait(2000);
    cy.xpath(selectors.admin_fname).type('John');
    cy.xpath(selectors.admin_lname).type('Doe');
    cy.xpath(selectors.admin_email).type(email);
    cy.xpath(selectors.admin_password).type('Password@123');
    cy.xpath(selectors.admin_phone).type('9734567890');

    cy.xpath(selectors.save_changes_btn).click();
    //cy.contains('Organization has been created successfully.').should('be.visible');
   });
    it.skip('Verify organization page display all filters correctly', () => {
     cy.xpath(selectors.organization_btn).click();
     cy.xpath(selectors.filter_suspended).click();
     cy.xpath(selectors.filter_by_allplans).should('be.visible');
     cy.xpath(selectors.filter_by_alldates).should('be.visible');
     cy.xpath(selectors.filter_by_date).should('be.visible');
     });
    it('Verify user can edit an organization', () => {
        cy.xpath(selectors.organization_btn).click();
        cy.wait(1000);
        cy.contains(orgName).should('exist');
        cy.contains(orgName).parents('tr').find('svg.lucide-square-pen').click();
        // cy.xpath(selectors.organization_btn).click();
        // cy.get('svg.lucide-square-pen').eq(0).click() // first
        // cy.get('svg.lucide-square-pen').eq(1).click() // second
        // cy.get('svg.lucide-square-pen').eq(2).click() // third
        // cy.get('svg.lucide-square-pen').eq(3).click() // fourt
        // cy.xpath(selectors.edit_org_by_orgname).click();
        cy.wait(4000);
        // cy.xpath(selectors.edit_org_btn).click();
        cy.xpath(selectors.edit_org_name).clear().type('Updated Organization2');
        cy.xpath(selectors.save_changes_btn).click();
       // cy.contains('The Organization has been sucessfully Updated').should('be.visible');
    });
    
    it('Verify user can change plan type of an organization', () => {
        cy.xpath(selectors.organization_btn).click();
        cy.contains(orgName).parents('tr').find('svg.lucide-arrow-right-left').click();
        //cy.xpath(selectors.edit_org_by_orgname).click();
        cy.wait(4000);
        // cy.xpath(selectors.change_plan_btn).click();
        cy.xpath(selectors.PlantypeSuperPro).click();
        cy.xpath(selectors.save_changes_btn).click();
//cy.contains('The Organization has been sucessfully updated').should('be.visible');
    });
    it('Verify user can add user under organization', () =>{
        cy.xpath(selectors.organization_btn).click();
        //cy.xpath(selectors.edit_org_by_orgname).click();
        //cy.wait(1000);
       // cy.xpath(selectors.manage_users_btn).click();
        //cy.wait(4000);
         cy.contains(orgName).parents('tr').find('svg.lucide-users').click();
        cy.contains('Add User').should('be.visible').click();
        //cy.xpath(selectors.add_user).click();
        cy.xpath(selectors.user_fname).type('Jane');
        cy.xpath(selectors.user_lname).type('Smith');
        cy.xpath(selectors.user_email).type('abdc11@gmail.com');
        cy.xpath(selectors.user_password).type('Password@123');
        cy.xpath(selectors.user_phone).type('9734567890');
        cy.xpath(selectors.save_user_btn).click();
       // cy.contains('User has been added successfully.').should('be.visible');
    });
    it('Verify user can delete an organization', () => {
        cy.xpath(selectors.organization_btn).click();
        // cy.xpath(selectors.edit_org_by_orgname).click();
        // cy.wait(4000);
        // cy.xpath(selectors.delete_org_btn).click();
        cy.contains(orgName).parents('tr').find('lucide lucide-trash2 lucide-trash-2').click();
        cy.xpath(selectors.confirm_delete_btn).click();
        //cy.contains('The Organization has been deleted successfully.').should('be.visible');
    });
    it('Verify user can logout successfully', () => {
        cy.xpath(selectors.logout_btn).click();
        cy.xpath(selectors.logout_confirm_btn).click();
    });
});