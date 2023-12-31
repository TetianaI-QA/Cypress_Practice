export class GeneralStep{
    openHomePage(){
        cy.visit(`http://www.webdriveruniversity.com/Contact-Us/contactus.html`);
    }

    openAccordionPage(){
        cy.visit(`http://www.webdriveruniversity.com/Accordion/index.html`);
        cy.url().should(`include`, `Accordion`);
    }

    visitHiddenElementsPage(){
        cy.visit(`http://www.webdriveruniversity.com/Hidden-Elements/index.html`);
        cy.once(`uncaught:exception`, () => false)
    }

    visitTablesPage(){
        cy.visit(`http://www.webdriveruniversity.com/Data-Table/index.html`);
    }

    visitDatepickerPage(){
        cy.visit('http://www.webdriveruniversity.com/Datepicker/index.html');
    }
}