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
      .when('/about', {
        templateUrl: 'app/views/about.html',
        controller: 'aboutCtrl'
      })
      .when('/blog',{
        templateUrl: 'app/views/blog.html',
        controller: 'blogCtrl'
      })
      .when('/resume', {
        templateUrl: 'app/views/resume.html',
        controller: 'resumeCtrl'
      }).otherwise({
        redirectTo: '/home'
      });

    }).controller('homeCtrl', ['$scope', function($scope){

    }]);



