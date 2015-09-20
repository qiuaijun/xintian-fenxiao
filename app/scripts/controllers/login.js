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
  .controller('LoginCtrl', function ($scope) {
    //alert('login');
    $scope.formLogin = function () {
      var values = {
        email: $scope.email,
        password: $scope.password
      }
      $resource('/api/login').save(values, function (data) {
        if (data.stat === 'ok') {
          loginSuccess();
        } else if (data.stat === 'fail') {
          loginError(data.msg);
        } else {
          loginError('Unknow error!');
        }
      }, function () {
        loginFail('Request error!');
      });

      loginSuccess = function () {
        $location.path("/menu");
      }

      loginError = function (msg) {
        $scope.errorMsg = msg;
        $scope.errorClass = "login-error-show";
      }
    }
  }
);
