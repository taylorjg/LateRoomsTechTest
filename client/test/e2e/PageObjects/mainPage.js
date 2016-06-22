var baseUrl = 'http://localhost:3000/index.html';

function MainPage() {

    this.get = function () {
        browser.get(baseUrl);
    }

    this.addCityBtn = function () {
        return element(by.id('addCityBtn'));
    }

    this.cityListItems = function () {
        return element.all(by.repeater('city in vm.cities'));
    }
}

module.exports = MainPage
