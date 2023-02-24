
describe('FooterTabsTest', () => {
    it('Ensure that footer links lead to appropriate pages', () => {
  
        cy.visit("https://web-uat.freshii.com/")

        cy.get("input[placeholder='Postal Code/ZIP Code']")
        .type("n8n1b8")
        
        cy.get("button[type='submit']").click()
        
        cy.get("img[alt='Offer'][src='/_next/image?url=https%3A%2F%2Ffreimages.freshii.com%2Fbanners%2Fdaily_deals2.png&w=3840&q=50']", { timeout: 10000 }).should('be.visible')
        
        cy.contains('.FreshiiLink_freshiiLink__aDOJ2.FreshiiLink_whiteColor__0o9vU', 'Franchising')
        .invoke('removeAttr', 'target')
        .click() 

        cy.origin('https://www.freshiifranchising.com', () => {

        cy.get('.sqs-slide-wrapper[data-slide-type="cover-page"] [data-compound-type="logo"][data-slice-type="image"] img')
        .should('be.visible')
        })


        
        // cy.window().then((win) => {
        //   // Switch to the new tab
        //   win.location.href = 'https://www.freshiifranchising.com'
        
        //   // Perform actions on the new tab

        //   cy.get('.sqs-slide-wrapper[data-slide-type="cover-page"] [data-compound-type="logo"][data-slice-type="image"] img')
        //   .should('be.visible')
      
        
        //   // Close the new tab
        //   win.close()
        // })
        
        // cy.url().should('include', 'web-uat.freshii.com') 
















})
})