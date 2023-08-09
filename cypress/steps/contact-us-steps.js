import ContactUsPage from "../pages/Contact-Us-Page";


export class ContactUsStep {
    visit(){
        cy.visit(`http://www.webdriveruniversity.com/Contact-Us/contactus.html`);
        cy.url().should(`include`, `contactus`);
    }

    fillAndVerifyContactUsForm(user){
        if(user.first_name){
            ContactUsPage.getFirstName.type(user.first_name);
        }
        if(user.last_name){
            ContactUsPage.getLastName.type(user.last_name);
        }
        if(user.email){
            ContactUsPage.getEmail.type(user.email);
        }
        if(user.comment){
            ContactUsPage.getComment.type(user.comment);
        }
        
    }

    submitContactUsForm(){
        ContactUsPage.getSubmitButton.click();
    }

    veryfyThatSuccessfulMessageIsDisplayed(){
        ContactUsPage.getSucsessfulSubmitMessage.should(`exist`);
        ContactUsPage.getInvalidEmeilError.should(`not.exist`);
        ContactUsPage.getAllFieldsAreRequaredError.should(`not.exist`);
    }

    veryfyThatAllFieldsAreRequaredErrorIsDisplayed(){
        ContactUsPage.getAllFieldsAreRequaredError.should(`exist`);
    }

    veryfyThatInvalidEmeilErrorIsDisplayed(){
        ContactUsPage.getInvalidEmeilError.should(`exist`);
    }
}

export const contactUsStep = new ContactUsStep;