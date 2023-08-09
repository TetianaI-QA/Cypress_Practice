export class AccordionPage {
    static get getTheTitle(){
        return cy.xpath(`//div[@id="main-header"]/h1`);
    }

    static get getManualTetsingTitle(){
        return cy.xpath(`//button[@id="manual-testing-accordion"]`);
    }

    static get getManualTestingText(){
        return cy.xpath(`//div[@id="manual-testing-description"]/p`);
    }

    static get getCucumberBDDTitle(){
        return cy.xpath(`//button[@id="cucumber-accordion"]`);
    }

    static get getCucumberBDDText(){
        return cy.xpath(`//div[@id="cucumber-testing-description"]/p`);
    }

    static get getAutomationTestingTitle(){
        return cy.xpath(`//button[@id="automation-accordion"]`);
    }

    static get getAutomationTestingText(){
        return cy.xpath(`//div[@id="automation-testing-description"]/p`);
    }

    static get getKeepKlickingTitle(){
        return cy.xpath(`id="click-accordion"`);
    }

    static get getAppearedText(){
        return cy.get(`div#timeout`);
    }

    static get getLoadingText(){
        return cy.xpath(`//div[@id="text-appear-box"]/p`)
    }
}