class ShoppingCartSummary
{
    getProductNameText()
    {
        cy.get('tr[id^=product]').find('.product-name > a')
    }
    getProductPriceText()
    {
        cy.get('tr[id^=product]').find('.price')
    }
    getProceedToCheckoutButton()
    {
        cy.get('.cart_navigation > .button')
    }
}
export default ShoppingCartSummary;