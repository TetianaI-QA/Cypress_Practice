class ProductPage {
    openProductsPage(){
        cy.visit(`http://www.webdriveruniversity.com/Page-Object-Model/products.html`)
    }
    // Header
    getTitleOfThePage(){
        return cy.get('#nav-title').contains(`WebDriver (New Approach To Learning)`);
    }

    // Content
    getSpecialOffersTitle(){
        return cy.get('#container-special-offers').contains(`Special Offers`);
    }

    getCamerasTitle(){
        return cy.get('#container-product1').contains(`Cameras`);
    }

    getNewLaptopsTitle(){
        return cy.get('#container-product2').contains(`New Laptops`);
    }

    getUsedLaptopsTitle(){
        return cy.get('#container-product3').contains(`Used Laptops`);
    }

    getGameConsolesTitle(){
        return cy.get('#container-product4').contains(`Game Consoles`);
    }

    getComponentsTitle(){
        return cy.get('#container-product5').contains(`Components`);
    }

    getDesktopSystemsTitle(){
        return cy.get('#container-product6').contains(`Desktop Systems`);
    }

    getAudioTitle(){
        return cy.get('#container-product7').contains(`Audio`);
    }

    //Pictures
    verifySpecialOffersImage(){
        return cy.get('#container-special-offers.thumbnail img');
    }

    verifyCamerasImage(){
        return cy.get('#camera-img');
    }

    verifyNewLaptopsImage(){
        return cy.get('#laptop1');
    }

    verifyUsegLaptopsImage(){
        return cy.get('#laptop2');
    }

    verifyGameConsolesImage(){
        return cy.get('#nintendo');
    }

    verifyComponentsImage(){
        return cy.get('#graphic-card');
    }

    verifyDesktopSystemsImage(){
        return cy.get('#computer');
    }

    verifyAudioImage(){
        return cy.get('#boombox');
    }

    //PopUp
    getPopUp(){
        return cy.get('.modal-content');
    }
}

export default ProductPage;