import{ short, medium, long } from "../lib/timeouts";
import {mobile, tablet, desktop } from "../lib/devices";

describe("First steps with WebdriverIO",   function ()  {
    it("Load Example Website",  function ()  { //"it" creates one test step
         browser.url("http://www.example.com");
         //browser.pause(1000);
         //Instead you can use short timeout like this:
         browser.pause(short);
         expect(browser).toHaveUrl("http://www.example.com/");
         expect(browser).toHaveTitle("Example Domain");

    });
    it("H1 should be visible",  function() {
        //Get selector and save it to variable
        let h1 = $("h1"); //if you want to take element in WebdriverIO, you need to use $ sign
        //Do assertion
         h1.waitForExist(); //Explicit waiting time
         expect(h1).toBeVisible();
    });
    it("P should be visible", function() {
        let p =  $("p");
         p.waitForExist();
         expect(p).toBeVisible();
    });
    it("Check link value",  function () {
        const link = $("a"); //find element wich contains link
         expect(link).toHaveLink("https://www.iana.org/domains/example");
    });
    //Explicit vs Implicit waits
    //Implicit wait - is static, hardcoded waiting time like browser.pause(3000);
    //It's not recommended to use it
    //It's good only for debugging purposes
    //You should never use it in a production test
    //Instead you should use explicit or dynamic waiting
    //Explicit waiting can wait until special element is loaded, it checks the element and continues as it's loaded
    //h1.waitForExist();

    it("Get element text", function () {
        const text =  $("h1").getText(); //This way to get element text need if you want to work with it later and store in var
        const element = $("h1"); // If you need just to assert the text, you may use this way
        element.waitForExist();
        expect(element).toHaveText("Example Domain");
    });
    //Assert values of elements
    //Website to practice autotest running: devexpress.github.io/testcafe/example
    it("Assert Attribute", function () {
        browser.url("https://devexpress.github.io/testcafe/example/");
        const btn = $("#submit-button"); // # - means id attribute
        btn.waitForExist();
        expect(btn).toHaveAttrContaining("type", "submit"); // because our button has attribute type with value "submit": type = "submit" in HTML code inspection
    });

    //Get element value. Assert element value
    it("Assert value", function () {
        const button = $("#populate");
        button.waitForExist();
        expect(button).toHaveValue("Populate"); //our button has attribute value ="Populate"
    });

    //Taking screenshots:
    it("Save Screenshot", function() {
       browser.saveScreenshot("your-name.png"); //you need specify the name of screenshot and its type: png
        //it will create screen-shot and put it into project root folder
        //if you run the same test multiple time, it will not create new file, it will overwrite the same screenshot file
    });

        //window size - viewport of your browser
        it("Change Browser viewport", function() {
            browser.setWindowSize(1650, 1050); //it takes width and height
            browser.pause(long);
        });

        //Timeout helpers:
        //In the root of the project let's create new folder named "lib"

        //Helper functions for mobile devices, tablets. Device Emulation Helpers.
        it("Set mobile view", function() {
            browser.setWindowSize(mobile[0], mobile[1]);
            browser.pause(short);
        });
        it("Set tablet view", function() {
            browser.setWindowSize(tablet[0], tablet[1]);
            browser.pause(medium);
        });
        it("Set desktop view", function() {
            browser.setWindowSize(desktop[0], desktop[1]);
            browser.pause(long);
        });

        //Browser Actions: Working with Inputs


});
