import Base from "../Base";

class FeedbackPage extends Base {
    get form() {
        return $("form");
    }
    get name() {
        return $("#name");
    }
    get email() {
        return $("#email");
    }
    get subject() {
        return $("#subject");
    }
    get comment() {
        return $("#comment");
    }

    get submitButton() {
        return $('input[type="submit"]');
    }

    formIsVisible() {
        this.form.waitForExist();
    }

    fillForm(name, email, subject, comment) {
        this.name.setValue(name);
        this.email.setValue(email);
        this.subject.setValue(subject);
        this.comment.setValue(comment);
    }

    fillName(name) {
        this.name.setValue(name);
    }
    fillEmail(email) {
        this.email.setValue(email);
    }
    fillSubject(subject) {
        this.subject.setValue(subject);
    }
    fillComment(text) {
        this.comment.setValue(text);
    }
    clickSubmitButton() {
        this.submitButton.click();
    }
}
export default new FeedbackPage();
