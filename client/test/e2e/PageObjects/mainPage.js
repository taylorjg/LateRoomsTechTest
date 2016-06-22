var baseUrl = 'http://localhost:3000/index.html';

function MainPage() {

    this.get = function (testId) {
        if (testId) {
            browser.get(baseUrl + '?testId=' + testId);
        }
        else {
            browser.get(baseUrl);
        }
    }

    this.cityListItems = function () {
        return element.all(by.repeater('city in vm.cities'));
    }

    this.addCityBtn = function () {
        return element(by.id('addCityBtn'));
    }
}

module.exports = MainPage
