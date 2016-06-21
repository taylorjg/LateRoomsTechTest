function HomeController($uibModal, CitiesService) {

    const vm = this;
    vm.cities = [];
    vm.visitedCityCount = visitedCityCount; 
    vm.onAdd = onAdd;

    CitiesService.getCities().then(response => vm.cities = response.data);

    function visitedCityCount() {
        return vm.cities.filter(city => city.Visited).length;
    }

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
