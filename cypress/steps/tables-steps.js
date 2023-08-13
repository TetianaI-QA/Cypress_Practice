import { TablesPage } from "../pages/Tables-Page";
import { GeneralStep } from "./general-step";
import { Table01 } from "../test-data/tables-data";
import { Table02 } from "../test-data/tables-data";
import { Badges } from "../test-data/tables-data";
import { TableDataHead } from "../test-data/tables-data";
import { TableDadaBody } from "../test-data/tables-data";
import { DrinksList } from "../test-data/tables-data";
import { FoodList } from "../test-data/tables-data";
import { JobsList } from "../test-data/tables-data";

export class TablesStep extends GeneralStep{
    checkGeneralTitle(){
      TablesPage.getGeneralTitle.should(`have.text`, `Data, Tables & Button States`);
    }

    checkFooter(){
      TablesPage.getFooter.should(`have.text`, `Copyright © www.GianniBruno.com`);
    }

    // First block with 2 tables and 3 input areas
    checkData1Table(){
    const parsedData = [];
    cy.get('#t01').then((table) => {
      cy.wrap(table).find('tr').each((row, rowIndex) => {
        const rowData = [];
        cy.wrap(row).find('th, td').each((cell, cellIndex) => {
          cy.wrap(cell).invoke('text').then((text) => {
            rowData.push(text);
          });
        });
        parsedData.push(rowData);
      });
    });
    cy.wrap(parsedData).should('deep.eq', Table01);
    }
      
    checkData2Table(){
    const parsedData = [];
    cy.get('#t02').then((table) => {
        cy.wrap(table).find('tr').each((row, rowIndex) => {
           const rowData = [];
           cy.wrap(row).find('th, td').each((cell, cellIndex) => {
            cy.wrap(cell).invoke('text').then((text) => {
            rowData.push(text);
           });
        });
        parsedData.push(rowData);
       });
    });
    cy.wrap(parsedData).should('deep.eq', Table02);
    }      
      
    fillAndVerifyInputForm(user){
        if(user.first_name){
            TablesPage.getFirstName.type(user.first_name).invoke('val').should('eq', user.first_name);
        }
        if(user.last_name){
            TablesPage.getLastName.type(user.last_name).invoke('val').should('eq', user.last_name);
        }
        if(user.input_text){
            TablesPage.getTextArea.clear().type(user.input_text).invoke('val').then((actualValue) => {
                const trimmedInputText = user.input_text.trim();
                expect(actualValue).to.eq(trimmedInputText);
              });
        }   
    }

    // Breadcrumb
    checkBreadcrumbBlock(){
        TablesPage.getHomeLink.click();
        TablesPage.getAboutUsLink.click();
        TablesPage.getContactUsLink.should(`have.text`, `Contact Us`);
    }

    // Badges
    checkBadgesBlock(){
      const parsedData = [];
      TablesPage.getBadges.then((table) => {
        cy.wrap(table).find('li').each((row, rowIndex) => {
          const rowData = [];
          cy.wrap(row).find('span').each((cell, cellIndex) => {
            cy.wrap(cell).invoke('text').then((text) => {
              rowData.push(text);
            });
          });
          parsedData.push(rowData);
        });
      });
    cy.wrap(parsedData).should('deep.eq', Badges);
    }

    // Pagination
    checkPaginationTitle(){
        TablesPage.getPaginationTitle.should(`have.text`, `Pagination`);
    }

    clickOnPaginationButtons(){
        TablesPage.getPaginationTable.within(() => {
            cy.get('li > a').each((pageButton, pageIndex) => {
              cy.wrap(pageButton).click();
              cy.wait(500);
            });
          });
    }

    // Table
    checkTableTitle(){
        TablesPage.getTableTitle.should(`have.text`, `Table`);
    }

    checkTitlesTableData(){
    const parsedData = [];
    TablesPage.getTitlesDataTable.then((table) => {
      cy.wrap(table).find('tr').each((row, rowIndex) => {
        const rowData = [];
        cy.wrap(row).find('th, td').each((cell, cellIndex) => {
          cy.wrap(cell).invoke('text').then((text) => {
            rowData.push(text);
          });
        });
        parsedData.push(rowData);
      });
    });
    cy.wrap(parsedData).should('deep.eq', [TableDataHead]);
    }

    checkTableBodyData(){
    const parsedData = [];
    TablesPage.getTableBodyData.then((table) => {
      cy.wrap(table).find('tr').each((row, rowIndex) => {
        const rowData = [];
        cy.wrap(row).find('th, td').each((cell, cellIndex) => {
          cy.wrap(cell).invoke('text').then((text) => {
            rowData.push(text);
          });
        });
        parsedData.push(rowData);
      });
    });
    cy.wrap(parsedData).should('deep.eq', TableDadaBody);

    }

    // Buttons & States
    // First line
    checkLinkButton(){
        TablesPage.getLinkButton.click().should(`be.visible`);
    }

    checkButtonButton(){
        TablesPage.getButtonButton.should(`have.text`, `Button`).click();
    }

    checkInputButton(){
        TablesPage.getInputButton.should(`have.value`, `Input`).click();
    }

    checkSubmitButton(){
        TablesPage.getSubmitButton.should(`have.value`, `Submit`).click();
    }

    checkResetButton(){
        TablesPage.getResetButton.should(`have.value`, `Reset`).click();
    }

    // Second line
    checkDangerButton(){
        TablesPage.getDangerButton.should(`have.text`, `Danger`).click();
    }

    checkWarningButton(){
        TablesPage.getWarningButton.should(`have.text`, `Warning`).click();
    }

    checkInfoButton(){
        TablesPage.getInfoButton.should(`have.text`, `Info`).click();
    }

    checkAlertButton(){
        TablesPage.getAlertButton.should(`have.text`, `Alert`).click();
    }

    // Third line
    checkButton1(){
      TablesPage.getButton1.should(`have.class`, `btn btn-primary active`).click().should(`have.class`, `btn btn-primary active focus`);
    }

    checkButton2(){
      TablesPage.getButton2.click().should(`have.class`, `btn btn-primary focus`);
    }

    checkButton3(){
      TablesPage.getButton3.click().should(`have.class`, `btn btn-primary focus`);
    }

    checkButton4(){
      TablesPage.getButton4.click().should(`have.class`, `btn btn-primary focus`);
    }

    // Random Text
    inspectTextTitle(){
      TablesPage.getTextTitle.should(`have.text`, `Random Text`);
    }

    inspectFirstText(){
      TablesPage.getFirstText.should(`have.text`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Platea dictumst quisque sagittis purus sit amet volutpat consequat.`);
      TablesPage.getMarckedFirstText.should(`have.text`, `sed do eiusmod tempor incididunt ut labore`);
    }

    inspectSecondText(){
      TablesPage.getSecondText.should(`have.text`, `Lorem ipsum dolor sit amet, consectetur adipiscing elit`);
    }

    inspectThirdText(){
      TablesPage.getThirdText.should(`have.text`, `Platea dictumst quisque sagittis purus sit amet volutpat consequat.`);
      TablesPage.getCiteText.should(`have.class`, `traversal-cite`).should(`have.text`, `volutpat consequat.`);
    }

    // Lists
    checkDrinksList(){
    const actualDrinks = [];
    TablesPage.getDrinksList.then((ul) => {
      cy.wrap(ul).find('li').each((item, itemIndex) => {
        cy.wrap(item).invoke('text').then((text) => {
          actualDrinks.push(text);
        })
      })
    }).then(() => {
      cy.wrap(actualDrinks).should('deep.eq', DrinksList);
    })
    }

    checkFoodList(){
    const actualFood = [];
    TablesPage.getFoodsList.then((ul) => {
      cy.wrap(ul).find('li').each((item, itemIndex) => {
        cy.wrap(item).invoke('text').then((text) => {
          actualFood.push(text);
        })
      })
    }).then(() => {
      cy.wrap(actualFood).should('deep.eq', FoodList);
    })
    TablesPage.getFruitsListTitle.should(`have.class`, `list-header`).should(`have.text`, `Fruits`);
    TablesPage.getVegetablesListTitle.should(`have.class`, `list-header`).should(`have.text`, `Vegetables`);
    }

    checkJobList(){
      TablesPage.getJobListTitle.should(`have.class`, `list-header`).should(`have.text`, `Types of Jobs`);
    const actualJobs = [];
    TablesPage.getJobListBody.then((ul) => {
      cy.wrap(ul).find('li').each((item, itemIndex) => {
        cy.wrap(item).invoke('text').then((text) => {
          actualJobs.push(text);
        })
      })
    }).then(() => {
      cy.wrap(actualJobs).should('deep.eq', JobsList);
    })
    }
}