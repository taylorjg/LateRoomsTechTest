function HomeController($uibModal, CitiesService) {

    const vm = this;
    vm.filter = 'all';
    vm.sort = 'none';
    vm.cities = [];
    vm.processedCities = processedCities;
    vm.showSortingPanel = showSortingPanel;
    vm.visitedCityCount = visitedCityCount;
    vm.unvisitedCityCount = unvisitedCityCount;
    vm.onUpdateCity = onUpdateCity;
    vm.onAdd = onAdd;

    getCities();

    function getCities() {
        CitiesService.getCities().then(response => vm.cities = response.data);
    }

    function processedCities() {

        let result = vm.cities.slice();

        switch (vm.filter) {
            case 'visited':
                result = result.filter(city => city.Visited);
                break;
            case 'unvisited':
                result = result.filter(city => !city.Visited);
                break;
            case 'all':
            default:
                break;
        }

        if (showSortingPanel()) {
            console.log('sorting...');
            switch (vm.sort) {
                case 'visited':
                    result = result.sort((city1, city2) => city2.Visited - city1.Visited);
                    break;
                case 'unvisited':
                    result = result.sort((city1, city2) => city1.Visited - city2.Visited);
                    break;
                case 'none':
                default:
                    break;
            }
        }

        return result;
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
