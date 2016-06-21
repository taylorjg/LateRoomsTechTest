'use strict';

function HomeController(CitiesService) {

    var vm = this;
    vm.cities = [];

    CitiesService.getCities().then(response => vm.cities = response.data);
}

HomeController.$inject = ['CitiesService'];

module.exports = HomeController;
