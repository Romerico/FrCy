class Order{
    clickMenuBtn(){
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
       cy.url().should('contain', "stores")
    }

    setAllergens(){
        cy.get('.Store_dietaryPrefBtnText__rSyta').click()

        cy.get('.ant-modal-body').should('be.visible')


        cy.get('input[type=checkbox]').first().check().should('be.checked')

        cy.get('.ant-btn.ant-btn-lg:not(.ant-btn-link)').click()

    }

    getAllergen(){
        return cy.get('.ant-scroll-number-only-unit.current')
     } 


}

export default Order