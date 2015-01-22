'use strict';

angular.module('boilerplate')
  .controller('MainCtrl', [
    '$scope',
    '$location',
    function($scope, $location) {

      $scope.login = function(user) {

        if (!user) {
          $scope.error = 'You must enter a username and password';
          return false;
        }

        if (!user.username) {
          $scope.error = 'You must enter a username';
          return false;
        }

        if (!user.password) {
          $scope.error = 'You must enter a password';
          return false;
        }

        $location.path('/dashboard');

      };

    } ]);
