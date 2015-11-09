'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.listItems = ['Item1', 'Item2', 'Item3'];
    $scope.addTodo = function() {
      $scope.listItems.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function() {
      $scope.listItems.splice();
    }
  });
