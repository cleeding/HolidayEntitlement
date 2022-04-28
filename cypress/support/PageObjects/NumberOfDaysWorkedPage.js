class NumberOfDaysWorkedPage {


    enterNumberOfDaysWorked(string) {
        cy.get('*[class^="gem-c-input govuk-input govuk-input--width-10"]').type(string);

    }

    clickContinue() {
        cy.get('*[class^="gem-c-button govuk-button gem-c-button--bottom-margin"]').click();
    }

    verifyPageValidation() {
        cy.get('*[class^="gem-c-error-message govuk-error-message"]').should('have.text', "\n  Error: There are only 7 days in a week. Please check and enter a correct value.\n")
    }


}
export default NumberOfDaysWorkedPage;