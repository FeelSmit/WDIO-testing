import Base from "../Base";

class PayBillsPage extends Base {
    //--------Common elements ---------------------------------------------------
    get alertMessage() {
        return $("#alert_content");
    }
    alertMessageIsVisible() {
        this.alertMessage.waitForExist();
    }

    //----------Pay Saved Payee tab -----------------------------------------------
    get payPayee() {
        return $("#sp_payee");
    }

    get payAccount() {
        return $("#sp_account");
    }

    get payAmount() {
        return $("#sp_amount");
    }

    get payDate() {
        return $("#sp_date");
    }

    get payDescription() {
        return $("#sp_description");
    }

    get payButton() {
        return $("#pay_saved_payees");
    }

    selectPayeeValue(attribute, value) {
        this.payPayee.waitForExist();
        this.payPayee.selectByAttribute(attribute, value);
    }

    selectAccountValue(value) {
        this.payAccount.waitForExist();
        this.payAccount.selectByVisibleText(value);
    }
    setPayAmount(value) {
        this.payAmount.setValue(value);
    }

    setDate(value) {
        this.payDate.setValue(value);
    }

    setDescription(value) {
        this.payDescription.setValue(value);
    }

    clickPayButton() {
        this.payButton.click();
    }

    //-------------------Purchase Foreign Currency tab------------------------------

    get purchaseCurrencyField() {
        return $("#pc_currency");
    }

    get purchaseCurrencyAmount() {
        return $("#pc_amount");
    }

    get dollarRadioButton() {
        return $("#pc_inDollars_true");
    }

    get purchaseCurrencyButton() {
        return $("#purchase_cash");
    }

    selectForeignCurrency(attribute, value) {
        this.purchaseCurrencyField.waitForExist();
        this.purchaseCurrencyField.selectByAttribute(attribute, value);
    }

    setCurrencyAmount(value) {
        this.purchaseCurrencyAmount.setValue(value);
    }

    selectDollarRadio() {
        this.dollarRadioButton.click();
    }

    clickCurrencyButton() {
        this.purchaseCurrencyButton.click();
    }

}

export default new PayBillsPage();
