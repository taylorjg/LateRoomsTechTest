function CitiesService($http) {

    function getCities() {
        return $http.get('api/cities');
    }

    return {
        getCities: getCities
    };
}

CitiesService.$inject = ['$http'];

module.exports = CitiesService;
