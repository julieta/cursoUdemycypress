class ShippingPage
{
    getTermsOfServiceCheckbox()
    {
        return cy.get('#cgh')
    }
    getPoceedToCheckoutButton()
    {
        return cy.get('.cart_navigation > .button')
    }

    
}
export default ShippingPage;