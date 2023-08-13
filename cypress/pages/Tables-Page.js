export class TablesPage{
    static get getGeneralTitle(){
        return cy.xpath(`//*[@id="main-header"]/h1`);
    }

    static get getFooter(){
        return cy.xpath(`//*[@id="nav-container"]//p`);
    }

    // First block with 2 tables and 3 input areas
    static get getFirstName(){
        return cy.xpath(`//*[@id="form-textfield"]/input[1]`);
    }

    static get getLastName(){
        return cy.xpath(`//*[@id="form-textfield"]/input[2]`);
    }

    static get getTextArea(){
        return cy.xpath(`//*[@id="form-textfield"]/textarea`);
    }

    // Breadcrumb
    static get getHomeLink(){
        return cy.xpath(`//div[3]/div/nav/ol/li[1]/a`);
    }

    static get getAboutUsLink(){
        return cy.xpath(`//div[3]/div/nav/ol/li[2]/a`);
    }

    static get getContactUsLink(){
        return cy.xpath(`//div[3]/div/nav/ol/li[3]`);
    }

    // Badges
    static get getBadges(){
        return cy.get('div:nth-child(4) > div > ul');
    }

    // Pagination
    static get getPaginationTitle(){
        return cy.xpath(`//div[5]/div/h2`);
    }

    static get getPaginationTable(){
        return cy.get('div:nth-child(5) > div > nav > ul');
    }

    // Table
    static get getTableTitle(){
        return cy.xpath(`//div[6]/div/h2`);
    }

    static get getTitlesDataTable(){
        return cy.xpath('//div[6]//thead');
    }

    static get getTableBodyData(){
        return cy.xpath('//div[6]//tbody');
    }

    // Buttons & States
    // First line
    static get getLinkButton(){
        return cy.get(`a.btn.btn-primary`);
    }

    static get getButtonButton(){
        return cy.xpath(`//div[7]/div/div[1]/button`);
    }

    static get getInputButton(){
        return cy.xpath(`//div[7]//input[1]`);
    }

    static get getSubmitButton(){
        return cy.xpath(`//div[7]//input[2]`);
    }

    static get getResetButton(){
        return cy.xpath(`//div[7]//input[3]`);
    }

    // Second line
    static get getDangerButton(){
        return cy.xpath(`//div[7]/div/div[2]/button[1]`);
    }

    static get getWarningButton(){
        return cy.xpath(`//div[7]/div/div[2]/button[2]`);
    }

    static get getInfoButton(){
        return cy.xpath(`//div[7]/div/div[2]/button[3]`);
    }

    static get getAlertButton(){
        return cy.xpath(`//div[7]/div/div[2]/button[4]`);
    }

    // Third line
    static get getButton1(){
        return cy.xpath(`//div[7]/div/div[3]/div/button[1]`);
    }

    static get getButton2(){
        return cy.xpath(`//div[7]/div/div[3]/div/button[2]`);
    }

    static get getButton3(){
        return cy.xpath(`//div[7]/div/div[3]/div/button[3]`);
    }

    static get getButton4(){
        return cy.xpath(`//div[7]/div/div[3]/div/button[4]`);
    }

    // Random Text
    static get getTextTitle(){
        return cy.get(`div:nth-child(8) > div > h2`);
    }

    static get getFirstText(){
        return cy.xpath(`//div[8]/div/div[1]/p`);
    }

    static get getMarckedFirstText(){
        return cy.xpath(`//div[8]//div[1]//mark`);
    }

    static get getSecondText(){
        return cy.xpath(`//div[8]//div[2]/blockquote/p`);
    }

    static get getThirdText(){
        return cy.xpath(`//div[8]//div[2]/blockquote/footer`);
    }

    static get getCiteText(){
        return cy.xpath(`//div[8]//cite`);
    }

    // Lists
    static get getDrinksList(){
        return cy.get('.traversal-drinks-list');
    }

    static get getFoodsList(){
        return cy.get(`ul.traversal-food-list`);
    }

    static get getFruitsListTitle(){
        return cy.xpath(`//*[@id="fruits"]`);
    }

    static get getVegetablesListTitle(){
        return cy.xpath(`//*[@id="veggie"]`);
    }

    static get getJobListTitle(){
        return cy.xpath(`//*[@id="types-of-jobs"]`);
    }

    static get getJobListBody(){
        return cy.xpath(`//div[9]/div[1]/ul[3]/ul`);
    }
}