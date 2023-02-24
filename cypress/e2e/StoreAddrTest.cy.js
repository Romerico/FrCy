
describe('StoreAddrTest', () => {
    it('Verify the store menu, for the store selected from the Location page is displayed', () => {


        cy.visit("https://web-uat.freshii.com/")

        cy.get("input[placeholder='Postal Code/ZIP Code']")
        .type("n8n1b8")

        cy.get("button[type='submit']").click()


        
        cy.get("img[alt='Offer'][src='/_next/image?url=https%3A%2F%2Ffreimages.freshii.com%2Fbanners%2Fdaily_deals2.png&w=3840&q=50']",
         { timeout: 10000 }).should('be.visible')

        
        cy.get(".Header_threeDots__QZzHQ").eq(0).click()


        // cy.get("input[placeholder='Search by address/postal code']").type('n8n').wait(1000).click().wait(1000).type('{downarrow}{enter}', {force: true})
        cy.get("input[placeholder='Search by address/postal code']").click().wait(5000).type('n8n')

        cy.get('.pac-container')
        .contains('Tecumseh').eq(0).click();

        cy.get("input[placeholder='Search by address/postal code']")
        .invoke('val')
        .then((text) => {
         expect(text.trim()).to.contain('Tecumseh');
             });

        // cy.get("input[placeholder='Search by address/postal code']").should('contain.text', 'Tecumseh')
        
    //    for select notation
        // cy.get("input[placeholder='Search by address/postal code']").type('n8n').select(':contains("Tecumseh")')



            // .suggestions div
            // .pac-container
            // .widget-pane-content-holder





    })
  })
