import Base from "../Base";

class HelpPage extends Base {
    get title() {
        return $(".span8 > h3");
    }
    get transferFundsLink() {
        return $("*=transfer funds");
    }
    get payBillLink() {
        return $("*=do I pay bills");
    }

    clickOnTransferFunds() {
        this.transferFundsLink.waitForExist();
        this.transferFundsLink.click();
    }
    clickOnPayBills() {
        this.payBillLink.waitForExist();
        this.payBillLink.click();
    }
}

export default new HelpPage();
