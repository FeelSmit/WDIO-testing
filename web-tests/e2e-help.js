import { short } from "../lib/timeouts";
import App from "../page-objects/App";
import LoginPage from "../page-objects/pages/LoginPage";
import Navbar from "../page-objects/components/Navbar";
import HelpPage from "../page-objects/pages/HelpPage";

describe("E2E Testing - Help Section", () => {
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
    it("Should load Help content", () => {
       // $(".icon-cog").click();
        Navbar.clickSettings();
       // $("#help_link").waitForExist();
       // $("#help_link").click();
        Navbar.clickHelpButton();
       // const title = $(".span8 > h3");
        const title = HelpPage.title;
        expect(title).toHaveText("How do I log into my account?");
       //To find element by partial text:
       //  $("*=transfer funds").click();
        HelpPage.clickOnTransferFunds();
        expect(title).toHaveText("How do I transfer funds?");
        browser.pause(short);
        // $("*=do I pay bills").click();
        HelpPage.clickOnPayBills();
        expect(title).toHaveText("How do I pay bills?");
    });
});
