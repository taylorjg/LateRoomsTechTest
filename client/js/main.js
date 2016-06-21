const angular = require('angular');
const uiBootstrap = require('angular-ui-bootstrap/dist/ui-bootstrap');
const uiBootstrapTpls = require('angular-ui-bootstrap/dist/ui-bootstrap-tpls');
const homeController = require('./home.controller');
const addCityDialogController = require('./addCity.dialog.controller');
const citiesService = require('./cities.service');
const cityDirective = require('./city.directive');

const app = angular.module('appLateRoomsTechTest', ['ui.bootstrap']);

app.controller(homeController.name, homeController);
app.controller(addCityDialogController.name, addCityDialogController);
app.service(citiesService.name, citiesService);
app.directive(cityDirective.name, cityDirective);
