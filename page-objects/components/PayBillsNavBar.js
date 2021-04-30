import Base from "../Base";

class PayBillsNavBar extends Base {
        get paySavedPayeeTab() {
            return $("#tabs > ul > li.ui-state-default.ui-corner-top.ui-tabs-selected.ui-state-active > a");
        }

        get addNewPayeeTab() {
            return $("#tabs > ul > li:nth-child(2) > a");
        }

        get purchaseCurrencyTab() {
            return $("#tabs > ul > li:nth-child(3) > a");
        }

        clickPaySavedPayeeTab() {
            this.paySavedPayeeTab.waitForExist();
            this.paySavedPayeeTab.click();
        }
        clickNewPayeeTab() {
            this.addNewPayeeTab.waitForExist();
            this.addNewPayeeTab.click();
        }

        clickPurchaseCurrencyTab() {
            this.purchaseCurrencyTab.waitForExist();
            this.purchaseCurrencyTab.click();
        }
}

export default new PayBillsNavBar();
