class AuthenticationPage
{
    getEmailAddressInput()
    {
        return cy.get('#email')
    }
    getPasswordInput()
    {
        return cy.get('#passwd')
    }
   
}
export default AuthenticationPage;