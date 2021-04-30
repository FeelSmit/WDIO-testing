import App from "../page-objects/App";
import FeedbackPage from "../page-objects/pages/FeedbackPage";

describe("E2E - Feedback", function() {

    it("Should load feedback form", function() {
        // App.openHomePage();
        // $("#feedback").waitForExist();
        // $("#feedback").click();
        App.openFeedbackPage();
        FeedbackPage.formIsVisible();

    });
    it("Should submit feedback form", function() {
        // $("#name").setValue("Name");
        // $("#email").setValue("test@test.com");
        // $("#subject").setValue("Subject");
        // $("#comment").setValue("message");
        // $('input[type="submit"]').click();
        FeedbackPage.fillForm("Name", "test@test.com", "Subject", "message");
        FeedbackPage.clickSubmitButton();
        expect(browser).toHaveUrl("http://zero.webappsecurity.com/sendFeedback.html");
    });

});
