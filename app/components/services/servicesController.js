var container = angular.module('consultantui.services', []);

container.directive('service', function () {
  return {
    restrict: 'E',
    templateUrl: 'components/services/services.html',
    scope: {
      service: '=data',
      name: "=name",
      edit: false
    }
  }
});
