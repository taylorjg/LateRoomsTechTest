function HomeController($uibModal, CitiesService) {

    const vm = this;
    vm.cities = [];
    vm.visitedCityCount = visitedCityCount;
    vm.unvisitedCityCount = unvisitedCityCount;
    vm.onUpdateCity = onUpdateCity;
    vm.onAdd = onAdd;

    CitiesService.getCities().then(response => vm.cities = response.data);

    function visitedCityCount() {
        return vm.cities.filter(city => city.Visited).length;
    }

    function unvisitedCityCount() {
        return vm.cities.filter(city => !city.Visited).length;
    }

    function onAdd() {
        const modalInstance = $uibModal.open({
            templateUrl: 'templates/addCity.dialog.html',
            controller: 'AddCityDialogController',
            controllerAs: 'vm'
        });
        modalInstance.result.then(city => {
            CitiesService.addCity(city).then(_ => {
                CitiesService.getCities().then(response =>
                    vm.cities = response.data);
            });
        });
    }

    function onUpdateCity(city) {
        console.log(`onUpdateCity - ${JSON.stringify(city)}`);
        CitiesService.updateCity(city).then(_ =>
            CitiesService.getCities().then(response =>
                vm.cities = response.data));
    }
}

HomeController.$inject = ['$uibModal', 'CitiesService'];

module.exports = HomeController;
