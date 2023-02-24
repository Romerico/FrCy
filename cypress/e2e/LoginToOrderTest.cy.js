// Guests should be redirected to the Login screen on selecting an item and clicking on the
// “Login To Order” button

describe('LoginToOrderTest', () => {
    it('Guests should be redirected to the Login screen on selecting'+
     'an item and clicking on the Login To Order” button', () => {

        cy.visit("https://web-uat.freshii.com/")

        cy.get("input[placeholder='Postal Code/ZIP Code']")
        .type("n8n1b8")

        cy.get("button[type='submit']").click()

        cy.get("img[alt='Offer'][src='/_next/image?url=https%3A%2F%2Ffreimages."+
        "freshii.com%2Fbanners%2Fdaily_deals2.png&w=3840&q=50']",
         { timeout: 10000 }).should('be.visible')
        cy.xpath("//button[(text()='ORDER NOW')]")
        .as('btn')
        .should('be.visible')
        .then(($btn) => {
          
          if ($btn.is(':enabled')) {
            cy.get('@btn').click();
          }
        })

        cy.xpath("//a[(text()='Smoothies')]").click()
        cy.get("img[alt='12oz Tropical Mango']").click()

        cy.xpath("//button[@qaattr='addToCart']").should('include.text', 'LOGIN TO ORDER')



    })
  })