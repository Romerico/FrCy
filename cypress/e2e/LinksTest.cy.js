describe('linksTest', () => {
    it.only('Verify all links (What’s New, Help, FAQs, Terms and Conditions, Privacy) under More are '
    +'clickable and display the right conten', () => {

        cy.visit("https://web-uat.freshii.com/")

        cy.get("input[placeholder='Postal Code/ZIP Code']")
        .type("n8n1b8")
        
        cy.get("button[type='submit']").click()
        
        cy.get("img[alt='Offer'][src='/_next/image?url=https%3A%2F%2Ffreimages.freshii.com%2Fbanners%2Fdaily_deals2.png&w=3840&q=50']",
         { timeout: 10000 }).should('be.visible')

         cy.contains('.FreshiiLink_freshiiLink__aDOJ2.FreshiiLink_whiteColor__0o9vU', 'FAQ')
        .invoke('removeAttr', 'target')
        .click() 

        cy.url().should('include', 'faq'.toLowerCase())

        

        








    })
  })
