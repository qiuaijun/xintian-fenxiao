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
  .controller('ItemCtrl', function ($scope, $location, $resource, Product) {
    $scope.select1 = "_select";
    $scope.products = Product.query();
  });

//商品管理
angular.module('xintianFenxiaoApp')
  .controller('ProductCtrl', function ($scope, $location, $resource, $routeParams) {
    $scope.select1 = "_select";

    var productService = $resource('/json/products/:id.json', {id: '@id'});
    var products = productService.get({id: $routeParams.id});
    $scope.products = products;

    $scope.buy = function () {
      var productService = $resource('/json/pay.json', {});
      var result = productService.get();
      console.log('no:' || result.id);
    };

    $scope.showJg = function (jg) {
      console.log('jg:' || jg)
      $scope.jg = jg;
    };
  });

//付款管理
angular.module('xintianFenxiaoApp')
  .controller('PayCtrl', function ($scope, $resource) {

  }
);

//订单的控制
angular.module('xintianFenxiaoApp')
  .controller('OrderCtrl', function ($scope, $location) {
    $scope.select2 = "_select";
  });

//订单退货拒收的控制
angular.module('xintianFenxiaoApp')
  .controller('IssueCtrl', function ($scope, $location) {
    $scope.select2 = "_select";
  });

//结算返款的控制
angular.module('xintianFenxiaoApp')
  .controller('PayOffCtrl', function ($scope, $location) {
    $scope.select2 = "_select";
  });

//奖励邀请
angular.module('xintianFenxiaoApp')
  .controller('InviteCtrl', function ($scope, $location, $resource) {
    $scope.select3 = "_select";
    var inviteService = $resource('/json/:home.json', {home: '@id'});
    $scope.homeInfo = inviteService.get({home: 'home'});

  });

//奖励邀请列表
angular.module('xintianFenxiaoApp')
  .controller('InviteListCtrl', function ($scope, $location, $resource) {
    $scope.select3 = "_select";
    var listService = $resource('/json/:home.json', {home: '@id'}, {
      query: {
        method: 'GET',
        params: {home: 'list'},
        isArray: true
      }
    });
    var list = eval(listService.query());


    var inviteListService = $resource('/json/:home.json', {home: '@id'}, {
      query: {
        method: 'GET',
        params: {home: 'users'},
        isArray: true
      }
    });
    $scope.tmp_users = inviteListService.query();

  });

//奖励列表
angular.module('xintianFenxiaoApp')
  .controller('InviteRewardCtrl', function ($scope, $location, $resource) {
    $scope.select3 = "_select";
    var inviteListService = $resource('/json/:home.json', {home: '@id'}, {
      query: {
        method: 'GET',
        params: {home: 'list'},
        isArray: true
      }
    });
    $scope.tmp_users = inviteListService.query();

  });

//公众号管理
angular.module('xintianFenxiaoApp')
  .controller('ChannelCtrl', function ($scope, $location, $resource) {
    $scope.select4 = "_select";
    var channService = $resource('/json/channels.json', {}, {
      query: {method: 'GET', params: {}, isArray: true}
    });
    $scope.channels = channService.query();
  });

//公众号管理
angular.module('xintianFenxiaoApp')
  .controller('ChannelListCtrl', function ($scope, $location, $resource) {
    $scope.select4 = "_select";
    var channService = $resource('/json/channels.json', {}, {
      query: {method: 'GET', params: {}, isArray: true}
    });
    $scope.channels = channService.query();
  });

//增加公众号管理
angular.module('xintianFenxiaoApp')
  .controller('AddChannelCtrl', function ($scope, $location) {
    $scope.select4 = "_select";
    if ($location.path() == "addChannel") {
      //alert('add channel');
    } else {
      //alert('not add' || $location.path());

    }
  });

//用户管理
angular.module('xintianFenxiaoApp')
  .controller('UserCtrl', function ($scope, $location, $resource) {
    $scope.select5 = "_select";
    var userService = $resource('/json/users/47.json', {});
    var users = userService.get();
    $scope.user = users;
  });

//服务条款管理
angular.module('xintianFenxiaoApp')
  .controller('TermsCtrl', function ($scope, $location, $resource) {
    $scope.select7 = "_select";
    $scope.products = $resource('json/:productId.json', {}, {
      query: {method: 'GET', params: {productId: 'products'}, isArray: true}
    });
  });
