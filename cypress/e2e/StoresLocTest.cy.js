import 'cypress-real-events/support'

describe('StoresLocTest', () => {
    it('Verify stores nearest to your location are displayed', () => {

        cy.visit("https://web-uat.freshii.com/")

        cy.get("input[placeholder='Postal Code/ZIP Code']")
        .type("n8n1b8")

        cy.get("button[type='submit']").click()


        
        cy.get("img[alt='Offer'][src='/_next/image?url=https%3A%2F%2Ffreimages.freshii.com%2Fbanners%2Fdaily_deals2.png&w=3840&q=50']",
         { timeout: 10000 }).should('be.visible')

        
        cy.get(".Header_threeDots__QZzHQ").eq(0).click()

        // // accept alert
        // cy.on('window:confirm', () => true)

        // cy.on('window:alert', (str) => {
        //     if (str.includes('web-uat.freshii.com wants to')) {
        //       return true;
        //     }
        //   })

        cy.on('window:alert', (str) => {
            if (str.includes('web-uat.freshii.com wants to')) {
              cy.realClick('Allow');
              return true;
            }
          })



        cy.get('.FreshiiText_freshiiText__aBp2F.FreshiiText_textSecondColor___BQ7j')
        .eq(0).should('contain.text', 'Windsor')






    })
  })
