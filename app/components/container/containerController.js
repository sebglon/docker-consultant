var container = angular.module('consultantui.container', []);

container.controller('ContainerController', ['$rootScope', 'Container', function ($rootScope, Container) {

  $scope.start = function () {
    Container.start({
        id: $scope.container.id,
        HostConfig: $scope.container.HostConfig
      }, function (d) {
        // docker started
      }, function (e) {
        // docker fail to start container
      }
    )
  };
}]);
