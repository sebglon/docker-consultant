var docker = angular.module('consultantui.services.docker', ['ngResource']);
docker.factory('Container', ['$resource', '$rootScope', function ($resource, $rootScope) {
  'use strict';
  return $resource($rootScope.hostUrl + '/containers/:id/:action', {
    start: {method: 'POST', params: {id: '@id', action: 'start'}}
  });
}]);
docker.factory('Docker', ['$resource', '$rootScope', function ($resource, $rootScope) {
  'use strict';
  // http://docs.docker.com/reference/api/docker_remote_api_<%= remoteApiVersion %>/#show-the-docker-version-information
  return $resource($rootScope.hostUrl + '/version', {}, {
    get: {method: 'GET'}
  });
}]);
//docker.factory('Host', []
