export class GeneralStep{
    openHomePage(){
        cy.visit(`http://www.webdriveruniversity.com/Contact-Us/contactus.html`);
    }

    openAccordionPage(){
        cy.visit(`http://www.webdriveruniversity.com/Accordion/index.html`);
        cy.url().should(`include`, `Accordion`);
    }
}