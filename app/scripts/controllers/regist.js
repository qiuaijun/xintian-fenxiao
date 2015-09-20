/**
 * Created by aijun on 15/9/19.
 */
'use strict';

/**
 * @ngdoc function
 * @name xintianFenxiaoApp.controller:LoginCtrl
 * @description
 * # MainCtrl
 * Controller of the xintianFenxiaoApp
 */
angular.module('xintianFenxiaoApp')
  .controller('RegistCtrl', function ($scope, $routeParams, User) {
    $scope.userregist = function () {
      alert('regist');

      User.save({id: 2324}, $scope.registForm, function (response) {
        // 处理响应成功
        alert('regist success');
      }, function (response) {
        // 处理非成功响应 });
        alert('regist error' + response);
      });
    };
    //alert('regist init');
  }
)
;
