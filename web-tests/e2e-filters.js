import App from "../page-objects/App";
import LoginPage from "../page-objects/pages/LoginPage";
import Navbar from "../page-objects/components/Navbar";
import InsideNavbar from "../page-objects/components/InsideNavbar";
import FiltersPage from "../page-objects/pages/FiltersPage";

describe("E2E Tests - Transactions Filter", () => {
    it("Should login with valid credentials", function() {
        // browser.url("http://zero.webappsecurity.com/");
        // $("#signin_button").click();
        // $("#login_form").waitForExist();
        // $("#user_login").setValue("username");
        // $("#user_password").setValue("password");
        // $('input[type= "submit"]').click();
        // $(".nav-tabs").waitForExist();
        App.openLoginPage();
        // LoginPage.formIsVisible();
        // LoginPage.fillForm("username", "password");
        // LoginPage.submitForm();
        LoginPage.login("username", "password");
        Navbar.insideNavbarIsVisible();
    });
    it("Trabsaction filter should work", () => {
        // $("#account_activity_tab").click();
        // $("#tabs > ul > li:nth-child(2) > a").waitForExist();
        // $("#tabs > ul > li:nth-child(2) > a").click();
        InsideNavbar.clickAccountActivityTab();
        InsideNavbar.clickFiltersLink();
        // $("#aa_description").waitForExist();
        // $("#aa_description").setValue("Test");
        // $('button[type="submit"]').click();
        // $("#filtered_transactions_for_account").waitForExist();
        // const message = $(".well");
        FiltersPage.fillDescription("Test");
        FiltersPage.clickSubmitFilter();
        FiltersPage.resultTableIsVisible();
        const message = FiltersPage.message;
        expect(message).toHaveText("No results.");
    });
});
