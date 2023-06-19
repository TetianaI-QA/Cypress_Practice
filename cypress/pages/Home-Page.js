class HomePage {
    openHomePage(){
        cy.visit(`http://www.webdriveruniversity.com/Page-Object-Model/index.html`);
    }

    // Header
    getTitleOfThePage(){
        return cy.get('#nav-title').contains(`WebdriverUniversity.com (Page Object Model)`);
    }

    // Carusel
    checkTheLeftCaruselButton(){
        return cy.get('.carousel-control.left');
    }

    checkTheRightCaruselButton(){
        return cy.get('.carousel-control.right');
    }

    checkTheCaruselImage(){
        return cy.get(`.carousel-inner > .active`);
    }

    checkCaruselIndicators(){
        return cy.get(`.carousel-indicators`);
    }

    // Navigation menu
    getNavigatorMenuHome(){
        return cy.get(':nth-child(1) > a').contains(`Home`);
    }

    getNavigatorMenuOurProdukts(){
        return cy.get(':nth-child(2) > a').contains(`Our Products`);
    }

    getNavigatorMenuContactUs(){
        return cy.get(':nth-child(3) > a').contains(`Contact Us`);
    }

    // Content
    // Why we are Block
    getAboutUsTextTitle(){
        return cy.get(":nth-child(1) > .thumbnail > .section-title > .sub-heading").contains(`Who Are We?`);
    }

    getAboutUsTextContent(){
        return cy.get(':nth-child(1) > .thumbnail > .caption > p');
    }

    checkFindOutMoreButton(){
        return cy.get('#button-find-out-more > b').contains(`Find Out More!`);
    }

    checkPopUp(){
        return cy.get('.modal-content');
    }

    // Great service Block
    getGreatServiceTitle(){
        return cy.get(":nth-child(2) > .thumbnail > .section-title > .sub-heading").contains(`GREAT SERVICE!`);
    }

    getGreatServiceTextContent(){
        return cy.get(':nth-child(2) > .thumbnail > .caption > p');
    }
    
    getGreatServiceStars(){
        return cy.get(':nth-child(2) > .thumbnail > .caption > .div-star');
    }

    // Why choose us Block
    getWhyChooseUsTile(){
        return cy.get(":nth-child(3) > .thumbnail > .section-title > .sub-heading").contains(`Why Choose Us?`);
    }

    getWhyChooseUsTextContent(){
        return cy.get(':nth-child(3) > .thumbnail > .caption > p');
    }

    // Exellent customer service Block
    getExellentCustomerServiceTitle(){
        return cy.get(":nth-child(4) > .thumbnail > .section-title > .sub-heading").contains(`Excellent Customer Service!`);
    }

    getExellentCustomerServiceTextContent(){
        return cy.get(':nth-child(4) > .thumbnail > .caption > p');
    }

    getExellentCustomerServiceStars(){
        return cy.get(':nth-child(4) > .thumbnail > .caption > .div-star');
    }

    // Footer
    getFooterText(){
        return cy.get('.col-lg-12 > p').contains(`Copyright © www.GianniBruno.com`);
    }
}

export default HomePage;