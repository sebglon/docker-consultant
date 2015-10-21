'use strict';

describe('Controller: FooterController', function () {

  // load the controller's module
  beforeEach(module('consultantui.services.docker', 'footer'));

  var FooterController,
    scope, $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, _$rootScope_, _$httpBackend_) {
    $httpBackend = _$httpBackend_;
    scope = _$rootScope_.$new();
    _$rootScope_.hostUrl = 'dockerapi';
    FooterController = $controller('FooterController', {
      $scope: scope,
      $rootScope: scope

      // place here mocked dependencies
    });
  }));

  it("should test controller initialize", function () {
    $httpBackend.expectGET('dockerapi/version').respond({
      "Version": "1.5.0",
      "Os": "linux",
      "KernelVersion": "3.18.5-tinycore64",
      "GoVersion": "go1.4.1",
      "GitCommit": "a8a31ef",
      "Arch": "amd64",
      "ApiVersion": "1.20",
      "Experimental": false
    });
    expect(scope.template).toBeDefined();

    $httpBackend.flush();
    expect(scope.apiVersion).toBeDefined();
    expect(scope.apiVersion).toEqualData('1.20');
  });
});
