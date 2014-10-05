'use strict';

/**
 * @ngdoc function
 * @name ngCountriesExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngCountriesExampleApp
 */
angular.module('ngCountriesExampleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
