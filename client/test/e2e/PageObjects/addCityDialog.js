function AddCityDialog() {

    this.city = function () {
        return element(by.model('vm.item.city'));
    }

    this.country = function () {
        return element(by.model('vm.item.country'));
    }

    this.attraction = function () {
        return element(by.model('vm.attraction'));
    }

    this.attractions = function () {
        return element.all(by.repeater('attraction in vm.item.attractions'));
    }
}

module.exports = AddCityDialog
