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
      // .when('/about', {
      //   templateUrl: 'app/views/about.html',
      //   controller: 'aboutCtrl'
      // })
      .when('/blog',{
        templateUrl: 'app/views/blog.html',
        controller: 'blogCtrl'
      })
      // .when('/resume', {
      //   templateUrl: 'app/views/resume.html',
      //   controller: 'resumeCtrl'
      // })
      .otherwise({
        redirectTo: '/home'
      });

    }).controller('homeCtrl', ['$scope', function($scope){
      angular.element('.page-item').on('click', function(event){
         var target = angular.element(this).find('a')[0].getAttribute('href');
         if( target.length ){
          event.preventDefault();
          angular.element('html, body').animate({
            scrollTop: angular.element(target).offset().top - 80 + 2
          }, 1000);
         }
      });

      angular.element(".contact").on('click', function(event){
        var contactModal = new Modal({
          content: angular.element('.contactModal')[0]
        });

        contactModal.open();
      })
    }]);



