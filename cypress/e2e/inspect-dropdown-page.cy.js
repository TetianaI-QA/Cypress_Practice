/// <reference types="Cypress" />
import { DropdownPage } from "../pages/Dropdown-Page";
import { dropdown1 } from "../test-data/dropdown-values";
import { dropdown2 } from "../test-data/dropdown-values";
import { dropdown3 } from "../test-data/dropdown-values";
import { colorArray } from "../test-data/dropdown-values";
import { testData } from "../test-data/dropdown-values";

const dropdownPage = new DropdownPage();


describe (`Dropdown`, () => {
    it(`Select dropdown`, () => {
        dropdownPage.openDropdownPage();
        dropdownPage.getDivByTitle(`Dropdown Menu(s)`).should(`exist`);
        testData.forEach(data => {
            dropdownPage.verifyAllDropdownOptions(data.array, data.id)
        })  
        // dropdownPage.verifyAllDropdownOptions(dropdown1, 1);
        // dropdownPage.verifyAllDropdownOptions(dropdown2, 2);
        // dropdownPage.verifyAllDropdownOptions(dropdown3, 3);

    })

    it(`Checkboxes`, () => {
        dropdownPage.openDropdownPage();
        dropdownPage.getDivByTitle(`Checkboxe(s)`).should(`exist`);
        // dropdownPage.get1option().click().should(`be.checked`);
        dropdownPage.get2option().check().should(`be.checked`);
        dropdownPage.get3option().uncheck().should(`not.be.checked`);
        dropdownPage.get4option().click().should(`be.checked`);
        dropdownPage.getAllCheckboxes().should(`have.length`, 4).first().check().should(`be.checked`);
    })

    it(`Radiobuttons`, () => {
        dropdownPage.openDropdownPage();
        dropdownPage.getDivByTitle(`Radio Button(s)`).should(`exist`);
        dropdownPage.getAllRadiobuttons().check(`orange`).should(`be.checked`);
        // dropdownPage.verifyAllRadiobuttons(colorArray);
        // cy.get(`//body`).document(doc =>{
        //     const test = doc.querySelector(`button2`)
        // })
    })

    it(`Selected and Disabled`, () => {
        dropdownPage.openDropdownPage();
        dropdownPage.getDivByTitle(`Selected & Disabled`).should(`exist`);

    })
})