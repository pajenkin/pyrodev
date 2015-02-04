'use strict';

/**********************************************************************
 * Angular Application
 **********************************************************************/
var app = angular.module('app', ['ngRoute'])
  .config(function($routeProvider, $locationProvider, $httpProvider) {

    //================================================
    // Define all the routes
    //================================================
    $routeProvider
      .when('/home', {
        templateUrl: 'app/views/home.html',
        controller: 'homeCtrl'
      })
      .when('/resume', {
        templateUrl: 'app/views/resume.html',
        controller: 'resumeCtrl'
      })
      .when('/contact', {
        templateUrl: 'app/views/contact.html',
        controller: 'contactCtrl'
      }).otherwise({
        redirectTo: '/home'
      });

    }).controller('homeCtrl', ['$scope', function($scope){

    }]);



