/// <reference types="Cypress" />
import ContactUsPage from "../pages/Contact-Us-Page";
import { users } from "../test-data/users-test-data";

const contactUsPage = new ContactUsPage();
const userWithValidData = users[0];
const userEmptyEmail = users[1];
const userEmptyFirstName = users[2];


describe (`Inspect the Contact Us Page`, () => {
    
        it(`Open and fill the Contact Us form  - with test case name ${userWithValidData.testName}`, () =>{
            contactUsPage.openContactUsPage();
            contactUsPage.fillContactUsForm(userWithValidData);
            contactUsPage.getSucsessfulSubmitMessage().should(`exist`);
        })

        it(`Open and fill the Contact Us form  - with test case name ${userEmptyEmail.testName}`, () =>{
            contactUsPage.openContactUsPage();
            contactUsPage.fillContactUsForm(userEmptyEmail);
            contactUsPage.getAllFieldsAreRequaredError().should(`exist`);
            contactUsPage.getInvalidEmeilError().should(`exist`);
        })

        it(`Open and fill the Contact Us form  - with test case name ${userEmptyFirstName.testName}`, () =>{
            contactUsPage.openContactUsPage();
            contactUsPage.fillContactUsForm(userEmptyFirstName);
            contactUsPage.getAllFieldsAreRequaredError().should(`exist`);
            contactUsPage.getInvalidEmeilError().should(`not.exist`);            
        })
});