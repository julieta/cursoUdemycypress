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
        cy.get('input[name="gender"][value="'+ this.datos.gender +'"]').check({force: true}).should('be.checked')
        cy.get('#userNumber').type(this.datos.mobile)

        //combo de datapicker, es decir seleccionar una fecha 
        cy.get('#dateOfBirthInput').click()
        cy.get('.react-datepicker__month-select').should('be.visible').select(this.datos.date[0])
        cy.get('.react-datepicker__year-select').should('be.visible').select(this.datos.date[1])
        cy.get('.react-datepicker__day--0'+ this.datos.date[2]).should('be.visible').click()
        cy.get('#dateOfBirthInput')
            .should('contain.value', this.datos.date[0].substring(0,3))
            .should('contain.value', this.datos.date[1])
            .should('contain.value', this.datos.date[2])
        cy.get('#currentAddress').type(this.datos.current_address)
    
    })
})










