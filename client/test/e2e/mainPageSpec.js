var MainPage = require('./PageObjects/mainPage');

describe('Main page', function () {

    var mainPage;

    beforeEach(function() {
        mainPage = new MainPage();
    });

    it('should initially load 5 cities', function () {
        mainPage.get();
        expect(mainPage.cityListItems().count()).toBe(5);
    });

    it('should have an Add City button', function () {
        mainPage.get();
        expect(mainPage.addCityBtn().isPresent()).toBe(true);
    });
});
