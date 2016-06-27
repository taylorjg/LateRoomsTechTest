'use strict';

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
        var scope = $rootScope.$new();
        var controller = $controller('HomeController', { scope: scope });
        expect(controller).toBeDefined();
        expect(controller.filter).toBe('all');
        expect(controller.sort).toBe('none');
        expect(controller.cities).toEqual([]);
        console.log(angular.mock.dump(controller));
    });

    it('calls getCities during construction', function () {
        var scope = $rootScope.$new();
        var cities = [{
            City: 'A',
            Country: 'B',
            Attractions: [],
            Visited: false,
            Id: 0
        }];
        var citiesServiceMock = {
            getCities: function () {
                return $q.resolve({ data: cities });
            }
        };
        var controller = $controller('HomeController', { scope: scope, CitiesService: citiesServiceMock });
        console.log(angular.mock.dump(controller));
        $rootScope.$apply();
        console.log(angular.mock.dump(controller));
        expect(controller.cities).toEqual(cities);
    });
});
