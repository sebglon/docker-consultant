/**
 * Created by sgl on 21/10/15.
 */
angular.module('footer', [])
  .controller('FooterController', ['$rootScope', '$scope', 'Docker', function ($rootScope, $scope, Docker) {
    $scope.template = 'components/footer/statusbar.html';
    Docker.get({}, function (d) {
      $rootScope.apiVersion = d.ApiVersion;
      console.log(d);
    });
  }]);
