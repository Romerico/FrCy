// ● Verify Allergens are clickable and you are able to
//  save your preferences under Dietary
// Restrictions.
import Login from "../Pages/loginPg.js"
import Order from "../Pages/orderPg.js"


describe('AllergensTest', () => {
    it('Verify Allergens are clickable and you are able to'+
    'save your preferences', () => {
      const login = new Login()
      const order = new Order()

      cy.visit("https://web-uat.freshii.com/")
      login.submitZip()

      order.clickMenuBtn()
      
      order.setAllergens()

      order.getAllergen().should('have.text', '1')

    })
  })
