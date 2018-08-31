var LinkedinConnect = require("nativescript-linkedin-connect").LinkedinConnect;
var linkedinConnect = new LinkedinConnect();

describe("greet function", function() {
    it("exists", function() {
        expect(linkedinConnect.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(linkedinConnect.greet()).toEqual("Hello, NS");
    });
});