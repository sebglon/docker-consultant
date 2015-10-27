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
    'pouchdb',
    'consultantui.services.docker',
    'consultantui.services.compose',
    'footer',
    'consultantui.container',
    'consultantui.applications',
    'consultantui.application',
    'consultantui.services'
  ])
  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/application/:id', {
        templateUrl: 'components/application/application.html',
        controller: 'ApplicationController',
        controllerAs: 'main'
      })
      .when('/applications', {
        templateUrl: 'components/applications/applications.html',
        controller: 'ApplicationsController',
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
