function AddCityDialog() {

    this.city = function () {
        return element(by.model('vm.item.City'));
    }

    this.country = function () {
        return element(by.model('vm.item.Country'));
    }

    this.attraction = function () {
        return element(by.model('vm.attraction'));
    }

    this.attractions = function () {
        return element.all(by.repeater('attraction in vm.item.Attractions'));
    }

    this.addAttractionBtn = function () {
        return element(by.id('addAttractionBtn'));
    }

    this.okBtn = function () {
        return element(by.id('okBtn'));
    }

    this.cancelBtn = function () {
        return element(by.id('cancelBtn'));
    }
}

module.exports = AddCityDialog
