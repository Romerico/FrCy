// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///<reference types ="Cypress" />

///<reference types ="cypress-xpath" />



Cypress.Commands.add('clickLink', (label) =>{
    cy.get('h5').contains(label).click()
})

 
Cypress.Commands.add('loginCommand', (username, password) =>{

    cy.visit("https://web-uat.freshii.com/")

    cy.get("input[placeholder='Postal Code/ZIP Code']")
    .type("n8n1b8")

    cy.get("button[type='submit']").click()

    cy.get("img[alt='Offer'][src='/_next/image?url=https%3A%2F%2Ffreimages.freshii.com%2Fbanners%2Fdaily_deals2.png&w=3840&q=50']",
     { timeout: 10000 }).should('be.visible')

     cy.get("button[qaattr='userProfile']").click()

     cy.xpath("(//img[@alt='Profile'])[1]").click()

    

      cy.xpath("//input[@name='email']").should('be.enabled').type(username)
  
      cy.xpath("//input[@name='password']").should('be.enabled').type(password)


      
      cy.xpath("//button[@qaattr='commonButtonsSignIn']").click()

      cy.wait(5000)
    
    let expString="Hello";

    cy.xpath("//h1").then(    (x)=>{
        let actString = x.text()



        expect(actString).to.contains(expString)
})})