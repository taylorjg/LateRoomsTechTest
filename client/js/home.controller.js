function HomeController($uibModal, CitiesService) {

    const vm = this;
    vm.filter = 'all';
    vm.sort = 'visited';
    vm.cities = [];
    vm.filteredCities = filteredCities;
    vm.showSortingPanel = showSortingPanel;
    vm.visitedCityCount = visitedCityCount;
    vm.unvisitedCityCount = unvisitedCityCount;
    vm.onUpdateCity = onUpdateCity;
    vm.onAdd = onAdd;

    getCities();

    function getCities() {
        CitiesService.getCities().then(response => vm.cities = response.data);
    }

    function filteredCities() {
        switch (vm.filter) {
            case 'visited':
                return vm.cities.filter(city => city.Visited);
            case 'unvisited':
                return vm.cities.filter(city => !city.Visited);
            case 'all':
            default:
                return vm.cities;
        }
    }

    function showSortingPanel() {
        return vm.filter === 'all';
    }

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
        modalInstance.result.then(city =>
            CitiesService.addCity(city).then(_ =>
                getCities()));
    }

    function onUpdateCity(city) {
        CitiesService.updateCity(city).then(_ =>
            getCities());
    }
}

HomeController.$inject = ['$uibModal', 'CitiesService'];

module.exports = HomeController;
