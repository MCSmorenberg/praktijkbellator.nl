'use strict';

/**
 * @ngdoc function
 * @name histoiredebullesApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the bellatorApp
 */
angular.module('bellatorApp')
  .controller('HeaderCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  });

