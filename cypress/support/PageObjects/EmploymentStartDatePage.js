class EmploymentStartDatePage {

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
}

export default EmploymentStartDatePage