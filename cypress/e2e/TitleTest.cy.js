
describe('TitleTest', () => {


    it('TitleTest - positive', () => {

      // steps

      cy.visit("https://web-uat.freshii.com/")
      cy.title().should('eq', 'Freshii')



      // expect(true).to.equal(true)
    })


    it('TitleTest - negative', () => {

      // steps

      cy.visit("https://web-uat.freshii.com/")
      cy.title().should('eq', 'Freshi')



      // expect(true).to.equal(true)
    })

    
  })