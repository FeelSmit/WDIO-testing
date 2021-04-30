import App from "../page-objects/App";
import LoginPage from "../page-objects/pages/LoginPage";
import Navbar from "../page-objects/components/Navbar";
import InsideNavbar from "../page-objects/components/InsideNavbar";
import PayBillsPage from "../page-objects/pages/PayBillsPage";

describe("E2@ - Pay", () => {
    it("Should log into application", function() {
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
        it("Should make payment", () => {
           // $("#pay_bills_tab").click();
            InsideNavbar.clickPayBillsTab();

           // const selectPayee = $("#sp_payee");
           // selectPayee.waitForExist();
           // selectPayee.selectByAttribute("value", "apple");
           PayBillsPage.selectPayeeValue("value", "apple");

           // const selectAccount = $("#sp_account");
           // selectAccount.waitForExist();
           // selectAccount.selectByVisibleText("Loan");
            PayBillsPage.selectAccountValue("Loan");

           // const amount = $("#sp_amount");
           // amount.setValue("500");
            PayBillsPage.setPayAmount("500");

           // $("#sp_date").setValue("2020-03-31");
            PayBillsPage.setDate("2020-03-31");

           // $("#sp_description").setValue("test");
            PayBillsPage.setDescription("test");

           // $("#pay_saved_payees").click();
            PayBillsPage.clickPayButton();

           // const message = $("#alert_content");
           // message.waitForExist();
            const message = PayBillsPage.alertMessage;
            PayBillsPage.alertMessageIsVisible();
            expect(message).toHaveText("The payment was successfully submitted.");
        });

});
