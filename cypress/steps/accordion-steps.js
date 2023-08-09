import { AccordionPage } from "../pages/Accordion-Page";
import { accordionTexts } from "../test-data/accordeon-texts";
import { GeneralStep } from "./general-step";


export class AccordionStep extends GeneralStep {
    veryfyManualTestingArea(){
        AccordionPage.getManualTetsingTitle.contains(accordionTexts.manualTestingTitle).click();
        AccordionPage.getManualTestingText.contains(accordionTexts.manualTestingDescription).should(`be.visible`);
        AccordionPage.getManualTetsingTitle.click();
        AccordionPage.getManualTestingText.should(`not.have.attr`, `style`); 
    }

    veryfyCucumberBDDArea(){
        AccordionPage.getCucumberBDDTitle.contains(accordionTexts.cucumberTitle).click();
        AccordionPage.getCucumberBDDText.contains(accordionTexts.cucumberBDDDescription).should(`be.visible`);
        AccordionPage.getCucumberBDDTitle.click();
        AccordionPage.getCucumberBDDText.should(`not.have.attr`, `style`);
    }

    veryfyAutomationTestingArea(){
        AccordionPage.getAutomationTestingTitle.contains(accordionTexts.automationTestingTitle).click();
        AccordionPage.getAutomationTestingText.contains(accordionTexts.automationTestingDescription).should(`be.visible`);
    }

    veryfyAreaWithAppearedText(){
        AccordionPage.getKeepKlickingTitle //.contains(accordionTexts.appearingTitle).click();
        AccordionPage.getAppearedText.contains(accordionTexts.appearedIn5SecText);
    }

}