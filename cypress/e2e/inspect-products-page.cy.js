/// <reference types="Cypress" />

import ProductPage from "../pages/Products-Page";
import HomePage from "../pages/Home-Page";
const productPage = new ProductPage();
const outHomePage = new HomePage();

describe('Inspect the Products Page', () => {
    it(`Check that the Products Page contain Title and Footer`, () => {
        productPage.openProductsPage();
        productPage.getTitleOfThePage().should(`exist`);
        outHomePage.getFooterText();
    });

    it(`Check that the Products Page contain Menu`, () => {
        productPage.openProductsPage();
        outHomePage.getNavigatorMenuHome();
        outHomePage.getNavigatorMenuOurProdukts().should(`exist`);
        outHomePage.getNavigatorMenuContactUs();
    });

    it(`Inspect Titles of the Content block on the Produckts Page`, () => {
        productPage.openProductsPage();
        productPage.getSpecialOffersTitle().should(`exist`);
        productPage.getCamerasTitle().should(`exist`);
        productPage.getNewLaptopsTitle().should(`exist`);
        productPage.getUsedLaptopsTitle().should(`exist`);
        productPage.getGameConsolesTitle().should(`exist`);
        productPage.getComponentsTitle().should(`exist`);
        productPage.getDesktopSystemsTitle().should(`exist`);
        // productPage.getAudioTitle().should(`exist`);
    });

    it(`Inspect Images`, () => {
        productPage.openProductsPage();
        productPage.verifySpecialOffersImage().should(`be.visible`); 
        productPage.verifyCamerasImage().should(`be.visible`);
        productPage.verifyNewLaptopsImage();
        productPage.verifyUsegLaptopsImage();
        productPage.verifyGameConsolesImage();
        productPage.verifyComponentsImage();
        productPage.verifyDesktopSystemsImage();
        productPage.verifyAudioImage();
    });

    it(`Check the PopUp appearance after clicking on the Special Offers`, () => {
        productPage.openProductsPage();
        productPage.verifySpecialOffersImage().click();
        productPage.getPopUp().should(`be.visible`);
    });
})