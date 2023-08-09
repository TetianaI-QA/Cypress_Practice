export class HiddenElementsPage{
    getNotDisplayedButton(){
        return cy.xpath(`#button1`);
    }

    getVisibilityHiddenButton(){
        return cy.xpath(`#button2`);
    }


    getZeroOpacityButton(){
        return cy.xpath(`#button3`);
    }

}