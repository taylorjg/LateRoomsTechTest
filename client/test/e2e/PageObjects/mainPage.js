var baseUrl = 'http://localhost:3000/index.html';

function MainPage() {

    this.get = function () {
        browser.get(baseUrl);
    }

    this.cityListItems = function () {
        return element.all(by.repeater('city in vm.cities'));
    }

    this.visitedCityCount = function() {
        return element(by.binding('vm.visitedCityCount'));
    }

    this.unvisitedCityCount = function() {
        return element(by.binding('vm.unvisitedCityCount'));
    }

    this.addCityBtn = function () {
        return element(by.id('addCityBtn'));
    }
}

module.exports = MainPage
