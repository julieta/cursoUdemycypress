class AuthenticationPage
{
    getEmailAddressInput()
    {
        cy.get('#email')
    }
    getPasswordInput()
    {
        cy.get('#passwd')
    }
   
}
export default AuthenticationPage;