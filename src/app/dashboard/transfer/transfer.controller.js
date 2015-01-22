'use strict';

angular.module('boilerplate')
  .controller('TransferCtrl', [
    '$scope',
    function($scope) {

      $scope.transfers = [];

      $scope.makeTransfer = function(trans) {
        trans.timestamp = new Date();
        trans.id = $scope.transfers.length + 1;
        $scope.transfers.push(angular.copy(trans));

        trans.amount = '';
        trans.to = '';
      };

    } ]);
