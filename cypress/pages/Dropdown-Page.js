export class DropdownPage {
    openDropdownPage(){
        return cy.visit(`http://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html`);
    }

    getDivByTitle(title){
        return cy.xpath(`//div[@class="thumbnail"]/*[contains(text(), "${title}")]`);
    }


    //Dropdowns
    getDropdownById(id){
        return cy.xpath(`//div[@class="thumbnail"]/*[contains(text(), "Dropdown Menu(s)")]/..//select[@id="dropdowm-menu-${id}"]`);
    }

    verifyAllDropdownOptions(arrayOfValues, dropdowmId){
        arrayOfValues.forEach(value =>{
            let el = value.toLowerCase().trim();
            this.getDropdownById(dropdowmId).should(`exist`).select(el).invoke(`val`).should(`eq`, el);
        })
    }

    //Checkboxes
    getCheckboxDiv(){
        return cy.xpath(`//div[@id="checkboxes"]`);
    }

    get1option(){
        return cy.xpath(`//input [@value="option-1"]`);
    }

    get2option(){
        return cy.xpath(`//input [@value="option-2"]`);
    }

    get3option(){
        return cy.xpath(`//input [@value="option-3"]`);
    }

    get4option(){
        return cy.xpath(`//input [@value="option-4"]`);
    }

    getAllCheckboxes(){
        return cy.xpath(`//input[@type="checkbox"]`);
    }

    //Radiobuttons
    RadiobuttonsForm(){
        return cy.xpath(`//form[@id="radio-buttons"]`);
    }

    getAllRadiobuttons(){
        return cy.xpath(`//form[@id="radio-buttons"]/input[@type="radio"]`);
    }

    verifyAllRadiobuttons(arrayOfColors){
        arrayOfColors.forEach(value =>{
            let col = value.toLowerCase().trim();
            this.getAllRadiobuttons().should(`exist`).select(col).invoke(`val`).should(`eq`, col);
        })
    }
}