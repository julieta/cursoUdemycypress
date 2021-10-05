/// <reference types="Cypress"/>

//importamos clases de PAge objects
import AddressPage from '../../support/PageObjects/AddressPage'
import AuthenticationPage from '../../support/PageObjects/AuthenticationPage'
import HomePage from '../../support/PageObjects/HomePage'
import PaymentPage from '../../support/PageObjects/PaymentPage'
import ShippingPage from '../../support/PageObjects/ShippingPage'
import ShoppingPage from '../../support/PageObjects/ShoppingPage'



//suite de casos que contiene cada caso
describe('Primer conjunto de casos de prueba', function()
{
    const addressPage = new AddressPage()
    const authenticationPage = new AddressPage()
    const homePage = new AddressPage()
    const paymentPage = new AddressPage()
    const shippingPage = new AddressPage()
    const shoppingPage = new AddressPage()
    

    beforeEach(()=>{
        //ingresamos a la pagina
        cy.visit("http://www.automationpractice.com/index.php")

    })
    /*
    //caso de prueba 1
    it('Contabilizar la cantidad de elementos en la seccion de pagina principal', function(){
        
        // verificar la cantidad de lementos visibles 
        cy.get('#homefeatured .product-container').should('have.length',7)

        //obtenemos el elemento homefeature .product-container como un parametro
        cy.get('#homefeatured .product-container').as('ProductosPopulares')

        //verificamos nuevamente la cantidad de elementos utilizados en el parámetro
        cy.get('@ProductosPopulares').should('have.length',7)
    })*/
    /*
    //caso de prueba 2
    it('agregar el elemento pagina principal', function(){
        //obtenemos el elemento homefeature .product-container como un parametro
        cy.get('#homefeatured .product-container').as('ProductosPopulares')

        //iteramos para encontrar un producto con nombre X
        cy.get('@ProductosPopulares')
            .find('.product-name')
            .each(($el,index, $list) => {
                cy.get('@ProductosPopulares').eq(index).find('.price').then(function ($el1) {
                    let precio = $el1.text()
                    cy.log(precio)
            
                    if($el.attr('title') === 'Printed Dress' && precio.includes('50.99')){
                        cy.log('Se ha encontrado el elemento buscado')
                        cy.log('Se ha encontrado el precio buscado')
                        cy.get('@ProductosPopulares').eq(index).contains('Add to cart').click()
                    }
                })
            
            })
        cy.get('h2 > .ajax_cart_product_txt')
            .should('contain.text', 'There is 1 item in your cart.')
            .should('be.visible')
    })
    */
   /*
    //caso de prueba 3
    it('Verificamos que el drop draw de woman, tenga los elementos necesarios', function(){
        cy.get('#block_top_menu > ul > li:nth-child(1) > ul').invoke('attr','style', 'display: block')
        cy.get('a[title="Tops"]').should('be.visible')
        cy.get('a[title="T-shirts"]').should('be.visible')
        cy.get('a[title="Blouses"]').should('be.visible')
        cy.get('a[title="Dresses"]').should('be.visible')
        cy.get('a[title^="Casual"]').should('be.visible')
        cy.get('a[title^="Evening"]').should('be.visible')
        cy.get('a[title^="Summer"]').should('be.visible')
    })
 
    //caso 4
    it('verificar que los checkboxss esten funcionando', function(){
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-casual_dresses"]) input').check().should('be.checked')
        cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-evening_dresses"]) input').should('not.be.checked')
        cy.get('li[class="nomargin hiddable col-lg-6"]:has(a[href*="categories-summer_dresses"]) input').should('not.be.checked')
    }) 

    //caso 5
    it('verficar que los dropdowns de arreglo esten funcionando', function(){
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('#selectProductSort').select('In stock').should('have.value','quantity:desc')
    })
    */
    //caso6
    it('verificador de busqueda', function(){
        



        cy.get('#search_query_top').type('Blouse')
        cy.get('#searchbox > .btn').click()
        cy.get('.product-container:has(.product-name[title="Blouse"]) .ajax_add_to_cart_button').click()
        cy.wait(5000)
        cy.get('.button-medium[title="Proceed to checkout"]').click()
        

        cy.get('tr[id^=product]').find('.product-name > a').should('contain.text', 'Blouse')
        cy.get('tr[id^=product]').find('.price').should('contain.text', '27.00')
        cy.get('.cart_navigation > .button').click()

        cy.get('#email').type('julieta.testing@gmail.com')
        cy.get('#passwd').type('testing123')
        cy.get('#SubmitLogin').click()
        cy.get('.cart_navigation > .button').click()
        cy.get('#cgv').check().should('be.checked')
        cy.get('.cart_navigation > .button').click()
        cy.get('.bankwire').click()
        cy.get('.cart_navigation > .button').click()
        cy.get('.cheque-indent > .dark').should('contain.text','Your order on My Store is complete.')
       

    })

})