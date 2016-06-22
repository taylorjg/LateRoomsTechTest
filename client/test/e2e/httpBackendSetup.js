const angularMocks = require('angular-mocks');

const app = angular.module('appLateRoomsTechTestDev', ['appLateRoomsTechTest', 'ngMockE2E']);
app.run(httpBackendSetup);

httpBackendSetup.$inject = ['$httpBackend'];

const initial_cities = require('./initialCities');
const cities = initial_cities.map(city => {
    city.Visited = city.City.length < 8;
    return city;
});

const URL_REGEXP_FOR_ALL_HTML_FILES = /.*\.html/;

function httpBackendSetup($httpBackend) {

    $httpBackend.whenGET(URL_REGEXP_FOR_ALL_HTML_FILES).passThrough();

    $httpBackend.whenGET('api/cities').respond(cities);
    $httpBackend.whenPOST('api/cities').respond(function(method, url, data) {
        const city = angular.fromJson(data);
        city.Visited = false;
        cities.push(city);
        console.log(`whenPOST('api/cities'): adding ${JSON.stringify(city)}`);
        return [200, city, {}];
    });
}
