function HomeController($uibModal, CitiesService) {

    const vm = this;
    vm.filter = 'all';
    vm.sort = 'none';
    vm.search = '';
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

        let filterFn = () => true;
        let searchFn = () => true;
        let sortFn = () => 0;

        switch (vm.filter) {
            case 'visited': filterFn = (city => city.Visited); break;
            case 'unvisited': filterFn = (city => !city.Visited); break;
        }

        if (vm.search) {
            var loweredSearch = vm.search.toLowerCase();
            searchFn = (city => {
                return city.Country.toLowerCase().includes(loweredSearch) ||
                    city.Attractions.filter(a => a.toLowerCase().includes(loweredSearch)).length > 0;
            });
        }

        if (showSortingPanel()) {
            switch (vm.sort) {
                case 'visited': sortFn = (city1, city2) => city2.Visited - city1.Visited; break;
                case 'unvisited': sortFn = (city1, city2) => city1.Visited - city2.Visited; break;
            }
        }

        return vm.cities
            .slice()
            .filter(filterFn)
            .filter(searchFn)
            .sort(sortFn);
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
