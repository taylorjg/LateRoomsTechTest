var baseUrl = 'http://localhost:3000/index.html';

function MainPage() {

    this.get = function () {
        browser.get(baseUrl);
    }

    this.allFilterRadio = function() {
        return element(by.id('allFilterRadio'));
    }

    this.visitedFilterRadio = function() {
        return element(by.id('visitedFilterRadio'));
    }

    this.unvisitedFilterRadio = function() {
        return element(by.id('unvisitedFilterRadio'));
    }

    this.sortingPanel = function() {
        return element(by.id('sortingPanel'));
    }

    this.noneSortRadio = function() {
        return element(by.id('noneSortRadio'));
    }

    this.visitedSortRadio = function() {
        return element(by.id('visitedSortRadio'));
    }

    this.unvisitedSortRadio = function() {
        return element(by.id('unvisitedSortRadio'));
    }

    this.cityListItems = function () {
        return element.all(by.repeater('city in vm.processedCities()'));
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
