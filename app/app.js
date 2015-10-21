'use strict';

/**
 * @ngdoc overview
 * @name dockerConsultantApp
 * @description
 * # dockerConsultantApp
 *
 * Main module of the application.
 */
angular
  .module('dockerConsultantApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'consultantui.services.docker',
    'footer',
    'container'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(['$rootScope', function ($rootScope) {
    $rootScope.hostUrl = 'http://localhost:2375';
// Etc. Initialize here.
  }]);
