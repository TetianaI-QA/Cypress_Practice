import { errors } from "../test-data/errors";

class ContactUsPage {
    openContactUsPage(){
        cy.visit(`http://www.webdriveruniversity.com/Contact-Us/contactus.html`);
    }

    static get getFirstName(){
        return cy.xpath(`//input[@name="first_name"]`);
    }

    static get getLastName(){
        return cy.xpath(`//input[@name="last_name"]`);
    }

    static get getEmail(){
        return cy.xpath(`//input[@name="email"]`);
    }

    static get getComment(){
        return cy.xpath(`//textarea[@name="message"]`);
    }

    static get getSubmitButton(){
        return cy.get(`#form_buttons`).contains(`SUBMIT`);
    }

    static get getResetButton(){
        return cy.get(`#form_buttons`).contains(`RETURN`);
    }

    static get getContactUsHeader(){
        return cy.get(`name="contactme"`);
    }

    static get getSucsessfulSubmitMessage(){
        return cy.get(`div#contact_reply > h1`).contains(`Thank You for your Message!`);
    }

    static get getInvalidEmeilError(){
        return cy.contains(errors.invalidEmail);
    }

    static get getAllFieldsAreRequaredError(){
        return cy.contains(errors.allFieldsAreRequered);
    }

    // fillContactUsForm(user){
    //     if(user.first_name){
    //         this.getFirstName.type(user.first_name);
    //     }
    //     if(user.last_name){
    //         this.getLastName.type(user.last_name);
    //     }
    //     if(user.email){
    //         this.getEmail.type(user.email);
    //     }
    //     if(user.comment){
    //         this.getComment.type(user.comment);
    //     }
    //     this.getSubmitButton.click();
    // };
}

export default ContactUsPage;