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
