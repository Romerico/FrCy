import { USERNAME, PASSWORD } from '../fixtures/credentials.js';

describe('LoginRegularTest', () => {
    it('Ensure that the guest is able to sign up using Google', () => {

       cy.loginCommand(USERNAME, PASSWORD)

        cy.get("button[qaattr='userProfile']").click()

        cy.xpath('//button[@qaattr="logout"]').click()

        cy.get("input[placeholder='Postal Code/ZIP Code']").should('be.visible')




    })
    })

