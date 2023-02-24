describe('EditItemTest', () => {
    it('Verify replace/remove/add ingredients functionality for menu items.', () => {


        cy.visit("https://web-uat.freshii.com/")

        cy.get("input[placeholder='Postal Code/ZIP Code']")
        .type("n8n1b8")

        cy.get("button[type='submit']").click()


        
    
        cy.get("img[alt='Offer'][src='/_next/image?url=https%3A%2F%2Ffreimages.freshii.com%2Fbanners%2Fdaily_deals2.png&w=3840&q=50']",
         { timeout: 10000 }).should('be.visible')


        cy.xpath("//button[(text()='ORDER NOW')]")
        .as('btn')
        .should('be.visible')
        .then(($btn) => {
          // Here we use `.then()` to wait for the button to become visible.
          // We also store a reference to the button element in the $btn variable.
          // This allows us to reuse the same element in the next command.
          if ($btn.is(':enabled')) {
            // We check if the button is enabled before attempting to click it.
            cy.get('@btn').click();
          }
        })

        cy.xpath("(//img[@alt='Chipotle Cheddar Bowl'])[1]").click()

        cy.xpath("//div[contains (text(), 'Add')]").click()

        cy.xpath('//span[@qaattr="plus"]').eq(0).click()

        cy.xpath('//p[@qaattr="quantity"]').should('exist')

        

    })
  })