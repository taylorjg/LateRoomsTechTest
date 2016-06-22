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
        console.log(`whenPOST('${url}'): adding ${JSON.stringify(city)}`);
        cities.push(city);
        return [200, city, {}];
    });
}
