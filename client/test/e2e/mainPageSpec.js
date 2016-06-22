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

    it('last city has the correct values', function () {
        mainPage.get();
        const lastCity = mainPage.cityListItems().last(); 
        expect(lastCity.element(by.binding('vm.city.City')).getText()).toBe('Beijing');
        expect(lastCity.element(by.binding('vm.city.Country')).getText()).toBe('China');
        const attractions = lastCity.all(by.repeater('attraction in vm.city.Attractions'));
        expect(attractions.get(0).element(by.binding('attraction')).getText()).toBe('Great Wall of China');
        expect(attractions.get(1).element(by.binding('attraction')).getText()).toBe('Forbidden City');
    });

    it('should have an Add City button', function () {
        mainPage.get();
        expect(mainPage.addCityBtn().isPresent()).toBe(true);
    });
});
