/**
 * Created by Maurice on 21/07/15.
 */
'use strict';

/**
 * @ngdoc function
 * @name histoiredebullesApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the bellatorApp
 */
angular.module('bellatorApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS'/*,
      'Karma'*/
    ];
  });

/**
function ContactController($scope, $http) {
  $scope.success = false;
  $scope.error = false;
  $scope.sendEmail = function () {

    var htmlBody = '<div>Name: ' + $scope.user.name + '</div>' +
      '<div>Email: ' + $scope.user.email + '</div>' +
      '<div>Subject: ' + $scope.user.subject + '</div>' +
      '<div>Message: ' + $scope.user.message + '</div>' +
      '<div>Date: ' + (new Date()).toString() + '</div>';

    $http({
      url: 'https://api.postmarkapp.com/email',
      method: 'POST',
      data: {
        'From': 'foo@foo.com',
        'To': 'maurice@courgetteconcepts.com',
        'HtmlBody': htmlBody,
        'Subject': 'New Contact Form Submission'
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-Postmark-Server-Token': '8569dcd45-6a1a-4e7b-ae75-ea37629de4'
      }
    }).
      success(function (data) {
        $scope.success = true;
        $scope.user = {};
      }).
      error(function (data) {
        $scope.error = true;
      });
  }
}
 */

//https://gist.github.com/miguelmota/9895759
