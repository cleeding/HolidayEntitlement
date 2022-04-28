class WorkoutHolidayPage {

    selectForAFullYear() {
        cy.get('#response-0').click();
    }

    selectSomeoneStartingPartYear() {
        cy.get('#response-1').click();
    }

    clickContinue() {
        cy.get('*[class^="gem-c-button govuk-button gem-c-button--bottom-margin"]').click();
    }

}

export default WorkoutHolidayPage