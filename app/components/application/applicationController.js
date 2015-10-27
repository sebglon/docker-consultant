var container = angular.module('consultantui.application', []);

container.controller('ApplicationController', ['$scope', '$routeParams', 'ApplicationStore', function ($scope, $routeParams, ApplicationStore) {
  $scope.changes = [];
  $scope.edit = false;

  var update = function () {
    $scope.application = {};
    if ($routeParams.id === 'new') {

      $scope.application.data = ApplicationStore.create();
      $scope.application.edit = true;
      $scope.application.newApplicationName = $scope.application.data.Name;
      $scope.application.State = {Running: false};
    } else {
      ApplicationStore.get({id: $routeParams.id}).then(function (data) {
        console.log(data);
        $scope.application.data = data;
        $scope.application.edit = false;
        $scope.application.newApplicationName = data.Name;
      }).catch(function (e) {
        if (e.status === 404) {
          console.log("Application not found");
        } else {
          console.log("Failure", e.data);
        }
      });
    }

  };


  $scope.saveApp = function () {
    console.log("Save app");
    ApplicationStore.save({app: $scope.application.data}).then(function (result) {
      console.log(result);
    }).catch(function (err) {
      console.log(err);
    });
  };

  $scope.cancelApp = function () {
    console.log("Save app");
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
    console.log('start app');
  };
  $scope.stop = function () {

  };
  $scope.up = function () {

  };
  $scope.up = function () {

  };


  $scope.renameApplication = function () {
    $scope.application.data.Name = $scope.application.newApplicationName;
    $scope.application.edit = false;
  };


  update();
}]);
