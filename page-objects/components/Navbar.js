import Base from "../Base";

class Navbar extends Base {
    get signInButton() {
        return $("#signin_button");
    }
    get insideNavbar() {
        return $(".nav-tabs");
    }
    get settingsButton() {
        return $(".icon-cog");
    }
    get helpButton() {
        return $("#help_link");
    }
    get searchField() {
        return $("#searchTerm");
    }

    singInButtonIsVisible() {
        this.signInButton.waitForExist();
    }

    clickSignIn() {
        this.signInButton.waitForExist();
        this.signInButton.click();
    }
    insideNavbarIsVisible() {
        this.insideNavbar.waitForExist();
    }
    clickSettings() {
        this.settingsButton.waitForExist();
        this.settingsButton.click();
    }
    clickHelpButton() {
        this.helpButton.waitForExist();
        this.helpButton.click();
    }
    search(text) {
        this.searchField.waitForExist();
        this.searchField.setValue(text);
        browser.keys("Enter");
    }
}

export default new Navbar();
