import Login from "../Pages/loginPg.js"
import Order from "../Pages/orderPg.js"
import GenUtil from "../Pages/GenUtil.js"

describe('AddAleTEst', () => {
    it('AddAleUsingCustomCommand', async () => {

      const login = new Login()
      const order = new Order()
      const genUtil = new GenUtil()
cy.visit("https://web-uat.freshii.com/")

login.submitZip()

order.clickMenuBtn()

cy.clickLink('Can Ginger Ale')

genUtil.logUrl()

genUtil.getElementTxt("h1.FreshiiTitle_freshiiTitle___Fohf").then(text => {
  expect(text).to.include('Ginger');

})
})
})
