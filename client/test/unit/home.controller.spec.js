'use strict';

describe('Home controller unit tests', function () {

    var $controller;
    var $rootScope;

    beforeEach(angular.mock.module('appLateRoomsTechTest'));

    beforeEach(angular.mock.inject(function (_$controller_, _$rootScope_) {
        $controller = _$controller_;
        $rootScope = _$rootScope_;
    }));

    it('can construct home controller and it is initialised properly', function () {
        var scope = $rootScope.$new();
        var controller = $controller('HomeController', { scope: scope });
        expect(controller).toBeDefined();
        expect(controller.filter).toBe('all');
        expect(controller.sort).toBe('none');
    });
});
