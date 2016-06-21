function city() {
    return {
        restrict: 'A',
        templateUrl: 'templates/city.directive.html',
        replace: true,
        scope: {
            city: '='
        },
        controller: function() {
        },
        controllerAs: 'vm',
        bindToController: true
    };
}

city.$inject = [];

module.exports = city;
