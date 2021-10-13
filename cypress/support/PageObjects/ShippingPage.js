class ShippingPage
{
    getTermsOfServiceCheckbox()
    {
        return cy.get('#cgv')
    }
    getPoceedToCheckoutButton()
    {
        return cy.get('.cart_navigation > .button')
    }
    
    
}
export default ShippingPage;