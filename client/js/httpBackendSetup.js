const angularMocks = require('angular-mocks');

const app = angular.module('appLateRoomsTechTestDev', ['appLateRoomsTechTest', 'ngMockE2E']);
app.run(httpBackendSetup);

httpBackendSetup.$inject = ['$httpBackend'];

let nextId = 0;
const initial_cities = require('./initialCities');
const cities = initial_cities.map(city => {
    city.Id = nextId++;
    city.Visited = city.City.length < 8;
    return city;
});

const URL_REGEXP_FOR_ALL_HTML_FILES = /.*\.html/;

function httpBackendSetup($httpBackend) {

    $httpBackend.whenGET(URL_REGEXP_FOR_ALL_HTML_FILES).passThrough();

    $httpBackend.whenGET('api/cities').respond(cities);

    $httpBackend.whenPOST('api/cities').respond(function(method, url, data) {
        const city = angular.fromJson(data);
        city.Id = nextId++;
        console.log(`whenPOST('${url}'): adding city ${JSON.stringify(city)}`);
        cities.push(city);
        return [201, city, {}];
    });

    $httpBackend.whenPOST(/api\/cities\/\d+/).respond(function(method, url, data) {
        const city = angular.fromJson(data);
        console.log(`whenPOST('${url}'): updating city ${JSON.stringify(city)}`);
        const index = cities.findIndex(c => c.Id === city.Id);
        if (index < 0) {
            return [404, city, {}];
        }
        cities[index] = city;
        return [200, city, {}];
    });
}
