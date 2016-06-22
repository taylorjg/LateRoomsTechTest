function CitiesService($http) {

    function getCities() {
        return $http.get('api/cities');
    }

    function addCity(city) {
        return $http.post('api/cities', JSON.stringify(city));
    }

    function updateCity(city) {
        return $http.post(`api/cities/${city.Id}`, JSON.stringify(city));
    }

    return {
        getCities: getCities,
        addCity: addCity,
        updateCity: updateCity
    };
}

CitiesService.$inject = ['$http'];

module.exports = CitiesService;
