'use strict';

var paris = {
    City: 'Paris',
    Country: 'France',
    Attractions: ['blue', 'white', 'red'],
    Visited: false,
    Id: 0
};

var london = {
    City: 'London',
    Country: 'UK',
    Attractions: ['oranges', 'lemons'],
    Visited: false,
    Id: 0
};

var berlin = {
    City: 'Berlin',
    Country: 'Germany',
    Attractions: ['black', 'red', 'yellow'],
    Visited: false,
    Id: 0
};

var cities = [paris, london, berlin];

describe('Home controller unit tests', function () {

    var $controller;
    var $rootScope;
    var $q;

    beforeEach(angular.mock.module('appLateRoomsTechTest'));

    beforeEach(angular.mock.inject(function (_$controller_, _$rootScope_, _$q_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $q = _$q_;
    }));

    it('can construct home controller and it is initialised properly', function () {
        var controller = $controller('HomeController');
        expect(controller).toBeDefined();
        expect(controller.filter).toBe('all');
        expect(controller.sort).toBe('none');
        expect(controller.search).toBe('');
        expect(controller.cities).toEqual([]);
    });

    it('calls getCities during construction', function () {
        var citiesServiceMock = {
            getCities: function () {
                return $q.resolve({ data: cities });
            }
        };
        var controller = $controller('HomeController', { CitiesService: citiesServiceMock });
        $rootScope.$apply();
        expect(controller.cities).toEqual(cities);
    });

    describe('search tests', function () {

        var citiesServiceMock = {
            getCities: function () {
                return $q.resolve({ data: cities });
            }
        };

        it_multiple(
            'search by country',
            function (search) {
                var controller = $controller('HomeController', { CitiesService: citiesServiceMock });
                $rootScope.$apply();
                controller.search = search;
                expect(controller.processedCities()).toEqual([paris]);
            },
            [
                'France', // full word, initial capital 
                'france', // full word, all lowercase
                'FRANCE', // full word, all uppercase
                'Fra', // prefix, initial capital
                'fra', // prefix, all lowercase
                'FRA', // prefix, all uppercase
                'ance', // suffix, all lowercase 
                'ANCE', // suffix, all uppercase 
                'ranc', // middle bit, all lowercase 
                'RANC' // middle bit, all uppercase 
            ]);

        it_multiple(
            'search by attractions',
            function (search, expectedCities) {
                var scope = $rootScope.$new();
                var controller = $controller('HomeController', { scope: scope, CitiesService: citiesServiceMock });
                $rootScope.$apply();
                controller.search = search;
                expect(controller.processedCities()).toEqual(expectedCities);
            },
            [
                ['Blue', [paris]],
                ['blue', [paris]],
                ['BLUE', [paris]],
                ['rang', [london]],
                ['RANG', [london]],
                ['red', [paris, berlin]],
                ['RED', [paris, berlin]]
            ]);
    });
});
