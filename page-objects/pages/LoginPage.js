import Base from "../Base";

class LoginPage extends Base {
    get loginForm() {
        return $("#login_form");
    }
    get userNameInput() {
        return $("#user_login");
    }
    get userPassword() {
        return $("#user_password");
    }
    get submitButton() {
        return $('input[type= "submit"]');
    }
    get error() {
        return $(".alert-error");
    }

    formIsVisible() {
        this.loginForm.waitForExist();
    }
    fillForm(username, password) {
        this.userNameInput.setValue(username);
        this.userPassword.setValue(password);
    }
    submitForm() {
        this.submitButton.click();
    }
    login(username, password) {
        this.loginForm.waitForExist();
        this.userNameInput.setValue(username);
        this.userPassword.setValue(password);
        this.submitButton.click();
    }
}

export default new LoginPage();
