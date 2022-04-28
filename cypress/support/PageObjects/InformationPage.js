class InformationPage {

    verifyStatutoryHolidayEntitlement(string) {
        cy.get('div[class="summary"]').should(
            "contain", string)
            ;
    }
}


export default InformationPage