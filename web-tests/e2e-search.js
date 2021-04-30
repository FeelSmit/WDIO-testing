import App from "../page-objects/App";
import LoginPage from "../page-objects/pages/LoginPage";
import Navbar from "../page-objects/components/Navbar";
import HelpPage from "../page-objects/pages/HelpPage";

describe("E2E Tests - Search", function() {
    it("Should load homepage", function() {
        App.openHomePage();
        // browser.url("http://zero.webappsecurity.com/index.html");
        // $("#searchTerm").waitForExist();

    });
    it("Should submit searchbox", function() {
        // $("#searchTerm").setValue("bank");
        //Simulate pressing Enter (as on keyboard):
        // browser.keys("Enter");
        Navbar.search("bank");
        const resultTitle = $("h2");
        resultTitle.waitForExist();
        expect(resultTitle).toHaveText("Search Results:");
    });
});
