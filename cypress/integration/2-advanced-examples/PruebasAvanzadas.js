/// <reference types="Cypress"/>


describe('Tercer feature de casos de pruebas avanzadas', function(){
    before(function(){
        //cargamos los valores del archivo carritoDECompras.json en un objeto de datos
        cy.fixture('carritoDeCompras').then(function(datos){
            this.datos = datos
            
        })
        
    })

    beforeEach(()=>{
        //ingresamos a la pagina que vamos a tester
        cy.visit('https://demo.opencart.com/')
    })

    it('Agregar producto al carrito', function(){
        cy.get("#menu ul a:contains('Phones & PDAs')").click()

        this.datos.articulos.forEach(function(articulos){
            cy.agregarElementoAlCarrito(articulos)
        })
               
        cy.get('.btn-inverse').click()
        
        this.datos.articulos.forEach(function(articulos){
            cy.verificamosElementoEnCarritoDD(articulos)
        })
        
    })


})