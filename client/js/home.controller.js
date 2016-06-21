'use strict';

function HomeController($uibModal, CitiesService) {

    const vm = this;
    vm.cities = [];
    vm.onAdd = onAdd;

    CitiesService.getCities().then(response => vm.cities = response.data);

    function onAdd() {
        const modalInstance = $uibModal.open({
            templateUrl: 'templates/addCity.dialog.html',
            controller: 'AddCityDialogController',
            controllerAs: 'vm'
        });
        modalInstance.result.then(city => console.dir(city));
    }
}

HomeController.$inject = ['$uibModal', 'CitiesService'];

module.exports = HomeController;
