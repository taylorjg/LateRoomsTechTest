var baseUrl = 'http://localhost:3000/index.html';

function MainPage() {

    this.get = function () {
        browser.get(baseUrl);
    }

    this.allRadio = function() {
        return element(by.id('allRadio'));
    }

    this.visitedRadio = function() {
        return element(by.id('visitedRadio'));
    }

    this.unvisitedRadio = function() {
        return element(by.id('unvisitedRadio'));
    }

    this.cityListItems = function () {
        return element.all(by.repeater('city in vm.filteredCities()'));
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
