


import chaiColors from 'chai-colors'
chai.use(chaiColors)


describe('PickupBtnTest', () => {


    it('Pickup should be selected by default', () => {

      // steps

      cy.visit("https://web-uat.freshii.com/")

      cy.get("input[placeholder='Postal Code/ZIP Code']")
      .type("n8n1b8")

      cy.get("button[type='submit']").click()

      var chaiColors = require('chai-colors')
      chai.use(chaiColors)

      cy.get(".HandoffMode_handoffButton__ZQ_dm.HandoffMode_handoffButtonActive__zl_ql").
        should('have.css', 'background-color').
        and('be.colored', '#249e6b')

        
        

    // tag id 
    // tag class
    // tag attribute
    // tag class attribute



      // expect(true).to.equal(true)
    })
})