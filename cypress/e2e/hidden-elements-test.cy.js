import { HiddenElementsStep } from "../steps/hidden-elements-steps";

const hiddenElementsStep = new HiddenElementsStep();

describe(`Inspect Hidden Elements`, () => {
    it(`Click on the Not Displayed button`, () => {
        hiddenElementsStep.visitHiddenElementsPage();
        hiddenElementsStep.clickNotDisplayedButton();
        // hiddenElementsStep.changeDisabledStatusByHtml();
    })

    it(`Click on the Not Displayed button with html`, () => {
        hiddenElementsStep.visitHiddenElementsPage();
        hiddenElementsStep.clickNotDisplayedButtonByHtml();
    })

    it(`Click on the Visibility Hidden button`, () => {
        hiddenElementsStep.visitHiddenElementsPage();
        hiddenElementsStep.clickVisibilityButton();
    })

    it(`Click on the Zero Opasity button`, () => {
        hiddenElementsStep.visitHiddenElementsPage();
        hiddenElementsStep.clickZeroOpasityButton();
    })
})