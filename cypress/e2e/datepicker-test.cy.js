import { DatepickerStep } from "../steps/datepicker-steps";

const datepickerStep = new DatepickerStep();

describe('Datepicker Tests', () => {
    beforeEach(() => {
      datepickerStep.visitDatepickerPage();
    });
  
    it('Check selecting tomorrow date', () => {
      datepickerStep.checkTomorrowDate();
    });
  
    it('Should select date 1 month ahead', () => {
      datepickerStep.checkPlusMonthDate();
    });
  
    it('Should select date 1 year ahead', () => {
      datepickerStep.checkPlusYearDate();
    });
  });