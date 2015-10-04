'use strict';

/**
 * @ngdoc overview
 * @name xintianFenxiaoApp
 * @description
 * # xintianFenxiaoApp
 *
 * Main module of the application.
 */
var fxApp =
  angular
    .module('xintianFenxiaoApp', [
      'ngAnimate',
      'ngCookies',
      'ngMessages',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'User',
      'Product'
    ]);

fxApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
    .when('/regist', {
      templateUrl: 'views/login/regist.html',
      controller: 'RegistCtrl',
      controllerAs: 'regist'
    })
    .when('/login', {
      templateUrl: 'views/user/main.html',
      controller: 'LoginCtrl',
      controllerAs: 'login'
    })
    .when('/item', {
      templateUrl: 'views/user/item.html',
      controller: 'ItemCtrl',
      controllerAs: 'item'
    })
    .when('/order', {
      templateUrl: 'views/user/order.html',
      controller: 'OrderCtrl',
      controllerAs: 'order'
    })
    .when('/issue', {
      templateUrl: 'views/user/issue.html',
      controller: 'IssueCtrl',
      controllerAs: 'issue'
    })
    .when('/payoff', {
      templateUrl: 'views/user/payoff.html',
      controller: 'PayOffCtrl',
      controllerAs: 'payoff'
    })
    .when('/invite', {
      templateUrl: 'views/user/invite.html',
      controller: 'InviteCtrl',
      controllerAs: 'invite'
    })
    .when('/invite_list', {
      templateUrl: 'views/user/invite_list.html',
      controller: 'InviteListCtrl',
      controllerAs: 'inviteList'
    })
    .when('/invite_reward', {
      templateUrl: 'views/user/invite_reward.html',
      controller: 'InviteRewardCtrl',
      controllerAs: 'inviteReward'
    })
    .when('/channelList', {
      templateUrl: 'views/user/channelList.html',
      controller: 'ChannelCtrl',
      controllerAs: 'channelList'
    })
    .when('/addChannel', {
      templateUrl: 'views/user/addChannel.html',
      controller: 'ChannelCtrl',
      controllerAs: 'addChannel'
    })
    .when('/channel', {
      templateUrl: 'views/user/channel.html',
      controller: 'ChannelCtrl',
      controllerAs: 'Channel'
    })
    .when('/product/:id', {
      templateUrl: 'views/user/product.html',
      controller: 'ProductCtrl',
      controllerAs: 'Product'
    })
    .when('/buy/:id', {
      templateUrl: 'views/user/buy.html',
      controller: 'ProductCtrl',
      controllerAs: 'Product'
    })
    .when('/pay', {
      template: '<script>alert("订单提交成功！");</script> ',
      controller: 'PayCtrl',
      controllerAs: 'Pay'
    })
    .when('/user_detail', {
      templateUrl: 'views/user/user_detail.html',
      controller: 'UserCtrl',
      controllerAs: 'user_detail'
    })
    .when('/chgpw', {
      templateUrl: 'views/user/chgpw.html',
      controller: 'UserCtrl',
      controllerAs: 'chgpw'
    })

    .when('/terms', {
      templateUrl: 'views/user/terms.html',
      controller: 'TermsCtrl',
      controllerAs: 'terms'
    })
    .otherwise({
      redirectTo: '/'
    });
});
