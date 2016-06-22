var MainPage = require('./PageObjects/mainPage');
var AddCityDialog = require('./PageObjects/addCityDialog');

describe('LateRooms full-stack tech test spec', function () {

    var mainPage;
    var addCityDialog;

    beforeEach(function () {
        mainPage = new MainPage();
        addCityDialog = new AddCityDialog();
    });

    describe('Retrieve the cities from the endpoint you created and list them along with their country and attractions', function () {

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
    });

    describe('Ability to add a new city to the list', function () {

        it('clicking the Add City button displays the Add City dialog', function () {
            mainPage.get();
            mainPage.addCityBtn().click();
            expect(addCityDialog.city().isPresent()).toBe(true);
            expect(addCityDialog.country().isPresent()).toBe(true);
            expect(addCityDialog.attraction().isPresent()).toBe(true);
        });

        it('can add a new city with no attractions', function () {
            mainPage.get();
            expect(mainPage.cityListItems().count()).toBe(5);
            mainPage.addCityBtn().click();
            addCityDialog.city().sendKeys('Paris');
            addCityDialog.country().sendKeys('France');
            addCityDialog.okBtn().click();
            expect(mainPage.cityListItems().count()).toBe(6);
        });

        it('can add a new city with attractions', function () {
            mainPage.get();
            expect(mainPage.cityListItems().count()).toBe(5);
            mainPage.addCityBtn().click();
            addCityDialog.city().sendKeys('Paris');
            addCityDialog.country().sendKeys('France');
            addCityDialog.attraction().sendKeys('Euro 2016');
            addCityDialog.addAttractionBtn().click();
            addCityDialog.attraction().sendKeys('Champagne');
            addCityDialog.addAttractionBtn().click();
            addCityDialog.okBtn().click();
            expect(mainPage.cityListItems().count()).toBe(6);
            const lastCity = mainPage.cityListItems().last(); 
            expect(lastCity.element(by.binding('vm.city.City')).getText()).toBe('Paris');
            expect(lastCity.element(by.binding('vm.city.Country')).getText()).toBe('France');
            const attractions = lastCity.all(by.repeater('attraction in vm.city.Attractions'));
            expect(attractions.get(0).element(by.binding('attraction')).getText()).toBe('Euro 2016');
            expect(attractions.get(1).element(by.binding('attraction')).getText()).toBe('Champagne');
        });

        describe('Provide basic validation', function() {
            // TODO
        });
    });

    describe('Allow a user to mark a city as visited/unvisited', function() {
        // TODO
    });

    describe('Show a visual counter of the number of cities visited/unvisited', function() {
        // TODO
    });

    describe('Filter the cities by visited state (i.e. visited or unvisited)', function() {
        // TODO
    });

    describe('Sort the cities by visited state (i.e. visited or unvisited)', function() {
        // TODO
    });

    describe('Search for city by attraction or country', function() {
        // TODO
    });
});