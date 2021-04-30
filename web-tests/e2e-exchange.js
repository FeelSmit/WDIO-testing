import App from "../page-objects/App";
import LoginPage from "../page-objects/pages/LoginPage";
import Navbar from "../page-objects/components/Navbar";
import InsideNavbar from "../page-objects/components/InsideNavbar";
import PayBillsNavBar from "../page-objects/components/PayBillsNavBar";
import PayBillsPage from "../page-objects/pages/PayBillsPage";

describe("E2E Tests - Currency Exchange", function () {
    it("Should log into application", function() {
        // $("#signin_button").waitForExist();
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
    it("Should make currency exchange", function() {
        // $("#pay_bills_tab").waitForExist();
        // $("#pay_bills_tab").click();
        InsideNavbar.clickPayBillsTab();
        // $("#tabs > ul > li:nth-child(3) > a").waitForExist();
        // $("#tabs > ul > li:nth-child(3) > a").click();
        PayBillsNavBar.clickPurchaseCurrencyTab();

        // const currencySelect = $("#pc_currency");
        // currencySelect.waitForExist();
        // currencySelect.selectByAttribute("value", "GBP");
        const currencySelect = PayBillsPage.purchaseCurrencyField;
        PayBillsPage.selectForeignCurrency("value", "GBP");

        // $("#pc_amount").setValue("500");
        // PayBillsPage.setCurrencyAmount("500");
        //Second way using Driver Helpers from wdio.congig.js:
        browser.waitAndType("#pc_amount", "500");

        // $("#pc_inDollars_true").click();
        PayBillsPage.selectDollarRadio();

        // $("#purchase_cash").click();
        PayBillsPage.clickCurrencyButton();

        // const message = $("#alert_content");
        const message = PayBillsPage.alertMessage;
        expect(message).toHaveText("Foreign currency cash was successfully purchased.");
    });
});
