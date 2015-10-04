/**
 * Created by aijun on 15/9/19.
 */
'use strict';

/* Services */

var userServices = angular.module('User', ['ngResource']);

userServices.factory('User', ['$resource',
  function ($resource) {
    return $resource('json/:userId.json', {}, {
      query: {method: 'GET', params: {userId: 'qaj'}, isArray: true},
      //鉴权用户
      check: {
        method: 'POST',
        params: {
          userId: '',
          pwd: ''
        }
      }
    });
  }])
;

var userServices = angular.module('Product', ['ngResource']);

userServices.factory('Product', ['$resource',
  function ($resource) {
    return $resource('/json/:productId.json', {}, {
      query: {method: 'GET', params: {productId: 'products'}, isArray: true}
    });
  }]);
