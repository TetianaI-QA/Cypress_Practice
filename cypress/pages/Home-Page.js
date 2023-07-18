class HomePage {
    openHomePage(){
        cy.visit(`http://www.webdriveruniversity.com/Page-Object-Model/index.html`);
    }

    // Header
    getTitleOfThePage(){
        return cy.xpath('//nav[@role="navigation"]').contains(`WebdriverUniversity.com (Page Object Model)`);
    }

    // Carusel
    checkTheLeftCaruselButton(){
        return cy.xpath('//div//a[@class="left carousel-control"]');
    }

    checkTheRightCaruselButton(){
        return cy.xpath('//div//a[@class="right carousel-control"]');
    }

    checkTheCaruselImage(){
        return cy.xpath(`//div[@class="item active"]//img[@class="slide-image"]`);
    }

    checkCaruselIndicators(){
        return cy.xpath(`//ol/li[@class="active"]`);
    }

    // Navigation menu
    getNavigatorMenuHome(){
        return cy.xpath('//nav').contains(`Home`);
    }

    getNavigatorMenuOurProdukts(){
        return cy.xpath('//ul/li[2]').contains(`Our Products`);
    }

    getNavigatorMenuContactUs(){
        return cy.xpath('//ul/li[last()]').contains(`Contact Us`);
    }

    // Content
    // Why we are Block
    getAboutUsTextTitle(){
        return cy.xpath(`//div/p[starts-with(text(), "Who")]`).contains(`Who Are We?`);
    }

    getAboutUsTextContent(){
        return cy.xpath(`//p[substring(text(), string-length(text()) - string-length("elit.") + 1) = "elit."]`);
    }

    checkFindOutMoreButton(){
        return cy.xpath(`//button/b[contains(text(), "Find")]`)
    }

    checkPopUp(){
        return cy.get('.modal-content');
    }

    // Great service Block
    getGreatServiceTitle(){
        return cy.xpath(`//div/p[starts-with(text(), "GREAT")]`).contains(`GREAT SERVICE!`);
    }

    getGreatServiceTextContent(){
        //return cy.get(':nth-child(2) > .thumbnail > .caption > p');
        return cy.xpath(`(//div/p[starts-with(text(), 'Lorem')])[2]`);
    }
    
    getGreatServiceStars(){
        return cy.get(':nth-child(2) > .thumbnail > .caption > .div-star');
    }

    // Why choose us Block
    getWhyChooseUsTile(){
        return cy.xpath(`//div/p[starts-with(text(), "Why")]`).contains(`Why Choose Us?`);
    }

    getWhyChooseUsTextContent(){
        return cy.xpath(`(//div/p[starts-with(text(), 'Lorem')])[3]`);
    }

    // Exellent customer service Block
    getExellentCustomerServiceTitle(){
        return cy.xpath(`//div/p[starts-with(text(), "Ex")]`).contains(`Excellent Customer Service!`);
    }

    getExellentCustomerServiceTextContent(){
        return cy.xpath(`(//div/p[starts-with(text(), 'Lorem')])[4]`);
    }

    getExellentCustomerServiceStars(){
        return cy.get(':nth-child(4) > .thumbnail > .caption > .div-star');
    }

    // Footer
    getFooterText(){
        return cy.xpath('//div/p[starts-with(text(), "Copyright")]').contains(`Copyright © www.GianniBruno.com`);
    }

    //Buttons
    getButtonByButtonName(name){
        return cy.xpath(`//button/b[contains(text(), "${name}")]`)
    }
}

export default HomePage;