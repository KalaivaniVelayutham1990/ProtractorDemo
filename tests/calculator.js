let homepage = require ('../pages/homepage')

describe("Demo Calculator", function() {
    it("Add Test", function() {

        homepage.getUrl('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('4');
        homepage.enterSecondNumber('3');
        homepage.clickGo();
        homepage.verifyResult('7');
         

    });
  });