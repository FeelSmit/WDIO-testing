import App from "../page-objects/App";
import LoginPage from "../page-objects/pages/LoginPage";
import Navbar from "../page-objects/components/Navbar";
import * as dataHelper from "../lib/data-helpers";

describe("E2E Tests - login / Logout Flow", function() {
    it("Should not login with invalid credentials", function() {
        App.openHomePage();
        //browser.url("http://zero.webappsecurity.com/");
        //We need to verify that page is loaded, so we can check any element is loaded, then the whole page is loaded
        //One way
        // const button = $("#signin_button");
        // button.waitForExist();
        //Second way:
        // $("#signin_button").waitForExist();
        // $("#signin_button").click();
        //Again check if we are on correct page by any selector
        // $("#login_form").waitForExist();
        // $("#user_login").setValue("user1");
        // $("#user_password").setValue("invalid");
        // $('input[type= "submit"]').click();
        // Navbar.clickSignIn();
        browser.waitAndClick("#signin_button");
        LoginPage.pauseShort();
        LoginPage.formIsVisible();
        // LoginPage.fillForm("invalid", "invalid");
        // Name using dataHelper name generator:
        LoginPage.fillForm(dataHelper.getRandomName(), "invalid");
        LoginPage.submitForm();
        const error = LoginPage.error;
        expect(error).toHaveText("Login and/or password are wrong.");
    });
    it("Should login with valid credentials", function() {
        App.openHomePage();
        //browser.url("http://zero.webappsecurity.com/");
        // $("#signin_button").click();
        // $("#login_form").waitForExist();
        // $("#user_login").setValue("username");
        // $("#user_password").setValue("password");
        // $('input[type= "submit"]').click();
        // $(".nav-tabs").waitForExist();
        Navbar.clickSignIn();
        LoginPage.formIsVisible();
        LoginPage.fillForm("username", "password");
        // LoginPage.submitForm();
        browser.waitAndClick('#login_form > div.form-actions > input'); //waitAndClick() function from wdio.config
        Navbar.insideNavbarIsVisible();
    });
    it("Should logout from app", function() {
        // $(".icon-user").waitForExist();
        // $(".icon-user").click();
        // $("#logout_link").waitForExist();
        // $("#logout_link").click();
        App.logout();
        // $("#pages-nav").waitForExist();
        Navbar.singInButtonIsVisible();
    });
});
