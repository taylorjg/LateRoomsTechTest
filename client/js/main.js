'use strict';

var angular = require('angular');
var homeController = require('./home.controller');
var citiesService = require('./cities.service');
var cityDirective = require('./city.directive');

var app = angular.module('appLateRoomsTechTest', []);

app.controller(homeController.name, homeController);
app.service(citiesService.name, citiesService);
app.directive(cityDirective.name, cityDirective);
