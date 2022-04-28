class EmploymentEndDatePage {

    selectDay(day) {
        cy.get('input[name="response[day]"]').type(day);
    }
    selectMonth(month) {
        cy.get('input[name="response[month]"]').type(month);

    }
    selectYear(year) {
        cy.get('input[name="response[year]"]').type(year);
    }

    clickContinue() {
        cy.get('*[class^="gem-c-button govuk-button gem-c-button--bottom-margin"]').click();
    }

    verifyPageValidation() {
        cy.get('*[class^="gem-c-error-message govuk-error-message"]').should("contain", "must be within 1 year of the leave year start date.");
    }
}

export default EmploymentEndDatePage