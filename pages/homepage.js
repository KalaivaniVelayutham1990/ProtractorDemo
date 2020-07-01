let homepage =function(){

    let firstNumberInput=element(by.model('first'));
    let secondNumberInput=element(by.model('second'));
    let goButton=element(by.css('[ng-click="doAddition()"]'));

    this.getUrl = function(url){
        browser.get(url);
    };

    this.enterFirstNumber = function(firstNo){
        firstNumberInput.sendKeys(firstNo);
    };

    this.enterSecondNumber = function(secondNo){
        secondNumberInput.sendKeys(secondNo);
    };

    this.clickGo = function(){
        goButton.click();
    };
    this.verifyResult = function(result){
        let output = element(by.cssContainingText('.ng-binding', result));
        expect(output.getText()).toEqual(result);
    };

};
module.exports = new homepage();