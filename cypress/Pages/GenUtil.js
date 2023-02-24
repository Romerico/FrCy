class GenUtil{
    logUrl(){
        cy.url().then(url => {
            cy.log(`The current URL is: ${url}`)
          })
    }

    getElementTxt(element){
        return cy.get(element).should('be.visible')
          .invoke('text')
          .then(text => {
            cy.log(`The text of the element is: ${text}`);
            return cy.wrap(text); // return the text wrapped in a Cypress promise
          })
}
}

export default GenUtil