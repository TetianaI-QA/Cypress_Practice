import { GeneralStep } from "./general-step";
import { DatepickerPage } from "../pages/Datepicker-Page";
import format from "date-fns/format";

export class DatepickerStep extends GeneralStep{
    checkTomorrowDate(){
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        // Change format
        const selectedDate = format(tomorrow, 'M/d/yyyy');
        console.log(selectedDate);
        // Next line doesn't work with page object  
        cy.get('#datepicker > input').click();
        cy.get('.datepicker-days .day:not(.old):not(.new)').contains(tomorrow.getDate()).click();  
        cy.get('#datepicker > input').invoke('val').then((inputValue) => {
            const formattedInputDate = format(new Date(inputValue), 'M/d/yyyy');
            expect(formattedInputDate).to.equal(selectedDate);
        });
    }

    checkPlusMonthDate(){
        const today = new Date();
        const oneMonthLater = new Date(today);
        oneMonthLater.setMonth(today.getMonth() + 1);
        // Change format
        const formattedDate = format(oneMonthLater, 'M/d/yyyy');
        console.log(formattedDate);
        // Next line doesn't work with page object
        cy.get('#datepicker > input').click();
        cy.xpath(`//div[2]/div[1]//tr[1]/th[3]`).click();
        cy.get('.datepicker-days .day:not(.old):not(.new)').contains(oneMonthLater.getDate()).click();
        cy.get('#datepicker > input').invoke('val').then((inputValue) => {
            const formattedInput = format(new Date(inputValue), 'M/d/yyyy');
            expect(formattedInput).to.equal(formattedDate);
        });
    }

    checkPlusYearDate(){
        const today = new Date();
        const futureDate = new Date(today);
        futureDate.setFullYear(today.getFullYear() + 1);
        // Change format
        const selectedDate = format(futureDate, 'M/d/yyyy');
        const expectedDateFormat = 'M/d/yyyy';
        cy.get('#datepicker > input').click();
        cy.get('.datepicker-days .datepicker-switch').click(); 
        cy.xpath(`//div[2]/div[2]//tr/th[2]`).click();
        cy.get('.datepicker-years .year:contains(' + futureDate.getFullYear() + ')').click();
        const targetMonthAbbreviation = format(futureDate, 'MMM'); 
        const monthSelector = `.datepicker-months .month:contains(${targetMonthAbbreviation})`;
        cy.get(monthSelector).click();
        cy.get('.datepicker-days .day:not(.old):not(.new)').contains(format(futureDate, 'd')).click();
        cy.get('#datepicker > input').invoke('val').then((inputValue) => {
            const formattedInputDate = format(new Date(inputValue), expectedDateFormat);
            expect(formattedInputDate.toLowerCase()).to.equal(selectedDate.toLowerCase());
        });  
    }

    chooseRandomYear(){
        // Generate a random year between 2024 and 2050
        const randomYear = Math.floor(Math.random() * (2050 - 2024 + 1)) + 2024;
        cy.get('#datepicker > input').click();
        cy.xpath(`//div[2]/div[1]//tr[1]/th[2]`).click();
        cy.xpath('//div[2]/div[2]//th[3]').then($nextButtons => {
            const numberOfClicks = randomYear - 2023;
            for (let i = 0; i < numberOfClicks; i++){
                cy.wrap($nextButtons).click();
            }
        });
        cy.get('.datepicker-years .year:contains(' + randomYear + ')');
        // Verify that the selected year is displayed in the top of calendar
        cy.xpath('//div[2]/div[2]//th[2]').should('have.text', randomYear);
    }

    chooseRandomMonth(){
        const randomMonth = Math.floor(Math.random() * 12) + 1;
        console.log(randomMonth);
        cy.xpath(`//div[2]/div[2]//span[${randomMonth + 1}]`).click();
    }

    chooseRandomDay(){
        const randomDay = Math.floor(Math.random() * 28) + 1;
        console.log(randomDay);
        cy.xpath(`//td[@class="day"][text() = "${randomDay}"]`).should('have.text', randomDay).click();
    }
}