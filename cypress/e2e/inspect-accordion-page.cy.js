import { AccordionStep } from "../steps/accordion-steps";

const accordionStep = new AccordionStep;

describe (`Inspect the Accordion Page`, () =>{
    it(`Check the Manual Testing Area`, () =>{
        accordionStep.openAccordionPage();
        accordionStep.veryfyManualTestingArea();
    })

    it(`Check the CucumberBDD Area`, () => {
        accordionStep.openAccordionPage();
        accordionStep.veryfyCucumberBDDArea();
    })

    it(`Check the Automation Testing Area`, () => {
        accordionStep.openAccordionPage();
        accordionStep.veryfyAutomationTestingArea();
    })

    it(`Check the appeared text`, () =>{
        accordionStep.openAccordionPage();
        accordionStep.veryfyAreaWithAppearedText();
    })
})