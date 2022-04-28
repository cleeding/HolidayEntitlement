import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../support/PageObjects/HomePage";
import EmploymentContractPage from "../../support/PageObjects/EmploymentContractPage";
import WorkoutHolidayPage from "../../support/PageObjects/WorkoutHolidayPage";
import NumberOfDaysWorkedPage from "../../support/PageObjects/NumberOfDaysWorkedPage";
import InformationPage from "../../support/PageObjects/InformationPage";
import EmploymentStartDatePage from "../../support/PageObjects/EmploymentStartDatePage";
import EmploymentEndDatePage from "../../support/PageObjects/EmploymentEndDatePage";

//Object Creation for PageObject Page Class and assigning it to a constant variable

const homePage = new HomePage();
const employmentContractPage = new EmploymentContractPage();
const workoutHolidayPage = new WorkoutHolidayPage();
const numberOfDaysWorkedPage = new NumberOfDaysWorkedPage();
const informationPage = new InformationPage();
const employmentStartDatePage = new EmploymentStartDatePage();
const employmentEndDatePage = new EmploymentEndDatePage();

//test steps 
Given("I open the Home Page for Holiday Entitlement", () => {
    homePage.launchHomePage();
});

Then("The title should be correct", ()=>{
    homePage.verifyTitle();
});

And("I click on the start now button", () => {
    homePage.pressStartNow();
});

And("The employment contract page is loaded", () => {
    employmentContractPage.verifyEmploymentContractText();
});

And("I select days worked per week and continue", () => {
    employmentContractPage.selectDaysWorkedPerWeekRadio();
    employmentContractPage.clickContinue();
});

And("I select for a full year and continue", () => {
    workoutHolidayPage.selectForAFullYear();
    workoutHolidayPage.clickContinue();

});

When("I enter {string} days and continue", (string) => {
    numberOfDaysWorkedPage.enterNumberOfDaysWorked(string);
    numberOfDaysWorkedPage.clickContinue();
});

Then("The page should display {string} days holiday", (string) => {
    informationPage.verifyStatutoryHolidayEntitlement(string);

});

Then("The page should display page validation for only 7 days in a week", () => {
    numberOfDaysWorkedPage.verifyPageValidation();
});

And("I select someone starting part way and continue", () => {
    workoutHolidayPage.selectSomeoneStartingPartYear();
    workoutHolidayPage.clickContinue();
});

And("I enter {string} in day field {string} in month field and {string} in year field and continue", (day, month, year) => {
    employmentStartDatePage.selectDay(day);
    employmentStartDatePage.selectMonth(month);
    employmentStartDatePage.selectYear(year);
    employmentStartDatePage.clickContinue();
});

When("I enter {string} in day field {string} in month field and {string} in year field and continue", (day, month, year) => {
    employmentEndDatePage.selectDay(day);
    employmentEndDatePage.selectDay(day);
    employmentEndDatePage.selectMonth(month);
    employmentEndDatePage.selectYear(year);
    employmentEndDatePage.clickContinue();
});

Then("The page should display 1 year between start date and end date page validation", () => {
    employmentEndDatePage.verifyPageValidation();
});



