/// <reference types="Cypress" />

import HomePage from "../pages/Home-Page";
const homePage = new HomePage();

describe('Check all elements on Home Page', () => {
  it('Home Page should contain Title and Footer', () => {
    homePage.openHomePage();
    homePage.getTitleOfThePage().should(`exist`);
    homePage.getFooterText();
  });

  it('Home Page should contain Carusel with all elements', () => {  
// Check the Carusel on the top of the Home Page
    homePage.openHomePage();
    homePage.checkTheLeftCaruselButton().click();
    homePage.checkTheRightCaruselButton().click();
    homePage.checkTheCaruselImage();
    homePage.checkCaruselIndicators();
  });

  it('Check the Home Page Menu', () => {
// Check the Navigator Menu
    homePage.openHomePage();
    homePage.getNavigatorMenuHome().should(`exist`);
    homePage.getNavigatorMenuOurProdukts();
    homePage.getNavigatorMenuContactUs();
  });
  
  it('Check the Content of the Home Page', () => {  
// Check the Content of the Home Page
    homePage.openHomePage();
    homePage.getAboutUsTextTitle().should(`exist`);
    homePage.getAboutUsTextContent();
    homePage.checkFindOutMoreButton();
    homePage.getGreatServiceTitle().should(`exist`);
    homePage.getGreatServiceTextContent();
    homePage.getGreatServiceStars();
    homePage.getWhyChooseUsTile().should(`exist`);
    homePage.getWhyChooseUsTextContent();
    homePage.getExellentCustomerServiceTitle().should(`exist`);
    homePage.getExellentCustomerServiceTextContent();
    homePage.getExellentCustomerServiceStars();
  });

it('Check the click on "Find Out More" Button', () => {
  // Check the Button
    homePage.openHomePage();
    homePage.getButtonByButtonName(`Find Out More!`).click();
    homePage.checkPopUp().should(`be.visible`);
  });
});