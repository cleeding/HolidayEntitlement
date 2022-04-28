const url = 'https://www.gov.uk/calculate-your-holiday-entitlement';
const START_NOW_BUTTON = '*[class^="gem-c-button govuk-button govuk-button--start"]';
const title = "Calculate holiday entitlement - GOV.UK";

class HomePage {

    launchHomePage() {
        cy.visit(url);
    }

    pressStartNow() {
        cy.get(START_NOW_BUTTON).click()
    }

    verifyTitle(){
        cy.title().should('eq', title);
    }

}
export default HomePage

