import { HiddenElementsPage } from "../pages/Hidden-Elements-Page";
import { GeneralStep } from "./general-step";


export class HiddenElementsStep extends GeneralStep {

    clickNotDisplayedButton(){
        HiddenElementsPage.getNotDisplayedButton.should(`not.be.visible`);
        HiddenElementsPage.getNotDisplayedButton.click({force: true}).should(`not.be.visible`);
    }

    clickNotDisplayedButtonByHtml(){
        HiddenElementsPage.getNotDisplayedButton.should(`not.be.visible`);
        cy.get(`div#not-displayed.section-title`).invoke(`css`, `display`, `block`);
        HiddenElementsPage.getNotDisplayedButton.invoke(`html`, `<p>CLICK ME!</p>`);
        HiddenElementsPage.getNotDisplayedButton.find(`p`).should(`have.text`, `CLICK ME!`).click();
    }

    changeDisabledStatusByHtml(){
        HiddenElementsPage.getNotDisplayedButton.should(`not.be.visible`);
        HiddenElementsPage.getNotDisplayedButton.invoke(`attr`, `style`, `display: block !important`).click().should(`be.visible`);
        // HiddenElementsPage.getNotDisplayedButton.click({force: true});
    }

    clickVisibilityButton(){
        HiddenElementsPage.getVisibilityHiddenButton.should(`not.be.visible`);
        HiddenElementsPage.getVisibilityHiddenButton.invoke(`css`, `visibility`, `visible`).click();
        // HiddenElementsPage.getVisibilityHiddenButton.click({force: true}).should(`not.be.visible`);
    }

    clickZeroOpasityButton(){
        HiddenElementsPage.getZeroOpacityButton.should(`exist`).click();
    }
}

// export const hiddenElementsStep = new hiddenElementsStep();