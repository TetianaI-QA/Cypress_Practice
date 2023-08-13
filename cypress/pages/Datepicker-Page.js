export class DatepickerPage{
    static get getInputDate(){
        cy.get('#datepicker > input');
    }

}