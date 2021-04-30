import { short, long } from "../lib/timeouts";

describe("Browser Actions", function() {
        it("Inputs", function() {
            browser.url("https://devexpress.github.io/testcafe/example/");
            const input = $("#developer-name");
            //Fill input with any input:
            input.waitForExist();
            input.setValue("Mike"); //Set value also will delete previous value in input field if it's there
            browser.pause(long);

            //to clear the value in the input field:
            input.clearValue();
            browser.pause(short);

            //to add value to input field
            input.addValue("Mike" + " "); //this addValue will append the entered data to existing there
            input.addValue("Meyers");
            browser.pause(short);
        });
        //Browser click and double click
        it("Click", function() {
            //click on the button
            const buttonPopulate = $("#populate");
            buttonPopulate.waitForExist();
            buttonPopulate.click();
            //Double click:
            // buttonPopulate.doubleClick();
            });

        //Checkbox & Radio buttons
        it("Checkbox & Radiobutton", function () {

            //Find ID of the input with required checkbox or radio and take its attribute
            const radio = $("#linux");

            // radio.waitForExist();
            radio.click();
            browser.pause(short);
            const checkbox = $("#remote-testing");
            checkbox.waitForExist();
            checkbox.click();
            browser.pause(short);
        });

    //Select box/dropdown:
    it("Select box", function() {
        browser.url("https://devexpress.github.io/testcafe/example/");
        const selectBox = $("#preferred-interface");
        selectBox.waitForExist();
        //if there is no attribute, you may choose by visible text:
        selectBox.selectByVisibleText("JavaScript API");
        browser.pause(short);
    });


});
