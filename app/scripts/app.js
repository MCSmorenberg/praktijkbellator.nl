'use strict';

/**
 * @ngdoc overview
 * @name bellatorApp
 * @description
 * # bellatorApp
 *
 * Main module of the application.
 */
angular
  .module('bellatorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/achtergrond', {
        templateUrl: '../views/achtergrond.html',
        controller: 'AchtergrondCtrl'
      })
      .when('/werkwijze', {
        templateUrl: '../views/werkwijze.html',
        controller: 'WerkwijzeCtrl'
      })
      .when('/tarieven', {
        templateUrl: '../views/tarieven.html',
        controller: 'TarievenCtrl'
      })
      .when('/contact', {
        templateUrl: '../views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
