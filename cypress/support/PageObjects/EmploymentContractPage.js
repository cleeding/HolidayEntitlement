
class EmploymentContractPage {


    verifyEmploymentContractText() {
        cy.get('*[class^="gem-c-hint govuk-hint govuk-!-margin-bottom-3"]').should(
            "have.text",
            "\n  Check the employment contract if you’re not sure about the holiday entitlement.\n")
            ;
    }

    selectDaysWorkedPerWeekRadio() {
        cy.get('#response-0').click();
    }

    clickContinue() {
        cy.get('*[class^="gem-c-button govuk-button gem-c-button--bottom-margin"]').click();
    }

}
export default EmploymentContractPage

