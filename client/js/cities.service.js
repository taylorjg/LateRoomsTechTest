function CitiesService($http) {

    const applicationJsonConfig = {
        headers: {
            contentType: 'application/json'
        }
    };

    function getCities() {
        return $http.get('api/cities');
    }

    function addCity(city) {
        return $http.post(
            'api/cities',
            JSON.stringify(city),
            applicationJsonConfig);
    }

    return {
        getCities: getCities,
        addCity: addCity
    };
}

CitiesService.$inject = ['$http'];

module.exports = CitiesService;
