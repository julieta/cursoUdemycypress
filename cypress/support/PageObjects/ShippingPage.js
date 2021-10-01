class ShippingPage
{
    getTermsOfServiceCheckbox()
    {
        cy.get('#cgh')
    }
    getPoceedToCheckoutButton()
    {
        cy.get('.cart_navigation > .button')
    }

    
}
export default ShippingPage;