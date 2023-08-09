/// <reference types="Cypress" />
import ContactUsPage from "../pages/Contact-Us-Page";
import { users } from "../test-data/users-test-data";
import { contactUsStep } from "../steps/contact-us-steps";


const contactUsPage = new ContactUsPage();
const userWithValidData = users[0];
const userEmptyEmail = users[1];
const userEmptyFirstName = users[2];


describe (`Inspect the Contact Us Page`, () => {
    
        it(`Open and fill the Contact Us form  - with test case name ${userWithValidData.testName}`, () =>{
            contactUsStep.visit();
            contactUsStep.fillAndVerifyContactUsForm(userWithValidData);
            contactUsStep.submitContactUsForm();
            contactUsStep.veryfyThatSuccessfulMessageIsDisplayed();
        })

        it(`Open and fill the Contact Us form  - with test case name ${userEmptyEmail.testName}`, () =>{
            contactUsStep.visit();
            contactUsStep.fillAndVerifyContactUsForm(userEmptyEmail);
            contactUsStep.submitContactUsForm();
            contactUsStep.veryfyThatAllFieldsAreRequaredErrorIsDisplayed();
            contactUsStep.veryfyThatInvalidEmeilErrorIsDisplayed();
        })

        it(`Open and fill the Contact Us form  - with test case name ${userEmptyFirstName.testName}`, () =>{
            contactUsStep.visit();
            contactUsStep.fillAndVerifyContactUsForm(userEmptyFirstName);
            contactUsStep.submitContactUsForm();
            contactUsStep.veryfyThatAllFieldsAreRequaredErrorIsDisplayed();          
        })
});