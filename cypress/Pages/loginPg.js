class Login{
    
    
    submitZip(){
        cy.get("input[placeholder='Postal Code/ZIP Code']")
        .type("n8n1b8")

        cy.get("button[type='submit']").click()
    }

  


}

export default Login