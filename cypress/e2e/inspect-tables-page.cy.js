import { TablesStep } from "../steps/tables-steps";
import { InputData } from "../test-data/tables-data";

const tablesStep = new TablesStep();


describe('Inspect the Data Table page', () => {
  // First block with 2 tables and 3 input areas
    it('Check the data from the first table', () => {
      tablesStep.visitTablesPage();
      tablesStep.checkData1Table();
    });

    it('Check the data from the second table', () => {
      tablesStep.visitTablesPage();
      tablesStep.checkData2Table();
    });

    it(`Fill and verify Input form`, () => {
      tablesStep.visitTablesPage();
      tablesStep.fillAndVerifyInputForm(InputData);
    })

  // Breadcrumb
    it(`Check the Breadcrumb block`, () => {
      tablesStep.visitTablesPage();
      tablesStep.checkBreadcrumbBlock();
    })

  // Badges
    it(`Check the Badges block`, () => {
      tablesStep.visitTablesPage();
      tablesStep.checkBadgesBlock();
    })

  // Pagination 
    it(`Check the Pagination block`, () => {
      tablesStep.visitTablesPage();
      tablesStep.checkPaginationTitle();
      tablesStep.clickOnPaginationButtons();
    })

    // Table
    it(`Check the Table block`, () => {
      tablesStep.visitTablesPage();
      tablesStep.checkTableTitle();
      tablesStep.checkTitlesTableData();
      tablesStep.checkTableBodyData();
    })

    // Buttons & States
    it(`Check the "Buttons & States" block`, () => {
      tablesStep.visitTablesPage();
      // Check first line
      tablesStep.checkLinkButton();
      tablesStep.checkButtonButton();
      tablesStep.checkInputButton();
      tablesStep.checkSubmitButton();
      tablesStep.checkResetButton();
      // Check second line
      tablesStep.checkDangerButton();
      tablesStep.checkWarningButton();
      tablesStep.checkInfoButton();
      tablesStep.checkAlertButton();
      // Check third line
      tablesStep.checkButton1();
      tablesStep.checkButton2();
      tablesStep.checkButton3();
      tablesStep.checkButton4();
    })

    // Random Text
    it.only(`Check the Random Text block`, () => {
      tablesStep.visitTablesPage();
      tablesStep.inspectTextTitle();
      tablesStep.inspectFirstText();
      tablesStep.inspectSecondText();
      tablesStep.inspectThirdText();
    })

    // Lists
});
  
  