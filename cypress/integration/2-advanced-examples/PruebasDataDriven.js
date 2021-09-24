/// <reference types="Cypress"/>

//Swite de caso de pruebas avanzados
describe('Segundo conjunto de casos de pruebas avanzadas', function(){
    before(function(){
        //cargamos los valores del archivo example.json en un objeto de datos
        cy.fixture('example').then(function(datos){
            this.datos = datos
        })
    })

    beforeEach(()=>{
        //ingresamos a la pagina de formularios
        cy.visit('https://demoqa.com/automation-practice-form')
    })

    it('Llenamos nuestro primer formulario utilizando data', function(){
        cy.get('#firstName').type(this.datos.name)
        cy.get('#lastName').type(this.datos.last_name)
        cy.get('#userEmail').type(this.datos.email)
       
       
        cy.get('input[name="gender"][value="Female"]').check({force: true})
       
        cy.get('#userNumber').type(this.datos.mobile)
        cy.get('#dateOfBirthInput').type(this.datos.subjects)
        cy.get('#currentAddress').type(this.datos.current_address)
    })
})










