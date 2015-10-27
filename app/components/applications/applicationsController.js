var container = angular.module('consultantui.applications', []);

container.controller('ApplicationsController', ['$scope', '$routeParams', 'ApplicationStore', function ($scope, $routeParams, ApplicationStore) {
  $scope.changes = [];
  $scope.edit = false;

  var update = function () {
    ApplicationStore.query().then(function (response) {
      console.log(response);
      $scope.applications = response.rows;
    });

  };

  $scope.build = function () {

  };
  $scope.kill = function () {

  };
  $scope.logs = function () {

  };
  $scope.port = function () {

  };
  $scope.ps = function () {

  };
  $scope.pull = function () {

  };
  $scope.restart = function () {

  };
  $scope.rm = function () {

  };
  $scope.run = function () {

  };
  $scope.scale = function () {

  };
  $scope.start = function () {

  };
  $scope.stop = function () {

  };
  $scope.up = function () {

  };

  $scope.renameApplication = function () {
    $scope.application.Name = $scope.newApplicationName;
    $scope.application.edit = false;
  };

  update();
}]);
