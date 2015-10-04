'use strict';

/**
 * @ngdoc function
 * @name xintianFenxiaoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xintianFenxiaoApp
 */
angular.module('xintianFenxiaoApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.formLogin = function () {
      console.log("send");
      $scope.title = 'testttttt';
      //如果鉴权通过，直接跳转到主页面
      return $location.path('/login');

    };

  });
