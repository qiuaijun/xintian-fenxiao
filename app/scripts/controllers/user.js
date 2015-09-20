/**
 * Created by aijun on 15/9/20.
 */
'use strict';

/**
 * @ngdoc function
 * @name xintianFenxiaoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the xintianFenxiaoApp
 */
//产品和文案
angular.module('xintianFenxiaoApp')
  .controller('ItemCtrl', function ($scope, $location) {
    $scope.select1 = "_select";
  });

//订单的控制
angular.module('xintianFenxiaoApp')
  .controller('OrderCtrl', function ($scope, $location) {
    $scope.select2 = "_select";
  });

//奖励邀请
angular.module('xintianFenxiaoApp')
  .controller('InviteCtrl', function ($scope, $location) {
    $scope.select3 = "_select";
  });

//公众号管理
angular.module('xintianFenxiaoApp')
  .controller('ChannelCtrl', function ($scope, $location) {
    $scope.select4 = "_select";
    if($location.path()=="addChannel"){
      //alert('add channel');
    }else{
      //alert('not add' || $location.path());

    }
  });

//用户管理
angular.module('xintianFenxiaoApp')
  .controller('UserCtrl', function ($scope, $location) {
    $scope.select5 = "_select";
  });

//服务条款管理
angular.module('xintianFenxiaoApp')
  .controller('TeamsCtrl', function ($scope, $location) {
    $scope.select7 = "_select";
  });
