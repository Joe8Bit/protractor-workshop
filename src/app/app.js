'use strict';

angular.module('boilerplate', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngRoute',
  'ConfigModule'
  ])
  .config([
    '$routeProvider',
    '$locationProvider',
    function($routeProvider, $locationProvider) {

    // Configure the application's routes
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      })
      .when('/dashboard/transfer', {
        templateUrl: 'app/dashboard/transfer/transfer.html',
        controller: 'TransferCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true).hashPrefix('!');
  } ]);
