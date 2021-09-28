/// <reference types="Cypress"/>



//Swite de caso de pruebas avanzados
describe('Segundo conjunto de casos de pruebas avanzadas', function(){
    before(function(){
        //cargamos los valores del archivo example.json en un objeto de datos
        cy.fixture('example').then(function(datos){
            this.datos = datos
            cy.fixture(this.datos.picture).as('imagen')
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
       

        //subject = materia
        cy.get('.subjects-auto-complete__value-container').type(this.datos.materia) 
        cy.get('div[id^="react-select-"]').click()
        cy.get('.subjects-auto-complete__value-container').should('contain.text', this.datos.materia)

        // ratio
        cy.get('div[class^="custom-control custom-checkbox"]:has(label:contains("'+this.datos.hobbies[0]+'")) input').check({force: true}).should('be.checked')
        
        //subida de la imagen -
        cy.get('#uploadPicture').then(function($el){
            
            const blob = Cypress.Blob.base64StringToBlob(this.imagen, 'image/png')
 
            const file = new File([blob], this.datos.picture, { type: 'image/png' })
            const list = new DataTransfer()

            list.items.add(file)
            const myFileList = list.files

            $el[0].files = myFileList
            $el[0].dispatchEvent(new Event('change', {bubbles: true}))
            
        })
        cy.get('#currentAddress').type(this.datos.current_address)
        cy.get('#state').click().find("div:contains('" +this.datos.estado+ "')[id*='react-select']").should('be.visible').click()
        cy.get('#city').click().find("div:contains('" +this.datos.ciudad+ "')[id*='react-select']").should('be.visible').click()
        cy.get('#submit').click()


        //aserciones
        cy.get('#example-modal-sizes-title-lg').should('have.text','Thanks for submitting the form')
        
        cy.get('td:contains(Student Name) +td').should('have.text', this.datos.name + ' ' +this.datos.last_name )
        cy.get('td:contains(Student Email) +td').should('have.text', this.datos.email)
        cy.get('td:contains(Gender) +td').should('have.text', this.datos.gender)
        cy.get('td:contains(Mobile) +td').should('have.text', this.datos.mobile)
        cy.get('td:contains(Date of Birth) +td').should('have.text', this.datos.date[2]+ " " +this.datos.date[0]+","+this.datos.date[1])
        cy.get('td:contains(Subjects) +td').should('have.text', this.datos.materia)
        cy.get('td:contains(Hobbies) +td').should('have.text', this.datos.hobbies[0])
        cy.get('td:contains(Picture) +td').should('have.text', this.datos.picture)
        cy.get('td:contains(Address) +td').should('have.text', this.datos.current_address)
        cy.get('td:contains(State and City) +td').should('have.text', this.datos.estado+ " "+ this.datos.ciudad )
    })
})










