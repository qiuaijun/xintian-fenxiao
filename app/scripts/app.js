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
      'User'
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
    .when('/invite', {
      templateUrl: 'views/user/invite.html',
      controller: 'InviteCtrl',
      controllerAs: 'invite'
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
    .when('/user_detail', {
      templateUrl: 'views/user/user_detail.html',
      controller: 'UserCtrl',
      controllerAs: 'user_detail'
    })
    .when('/terms', {
      templateUrl: 'views/user/terms.html',
      controller: 'TeamsCtrl',
      controllerAs: 'terms'
    })
    .otherwise({
      redirectTo: '/'
    });
});
