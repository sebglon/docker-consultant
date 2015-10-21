'use strict';

describe('Controller: AboutController', function () {

  // load the controller's module
  beforeEach(module('dockerConsultantApp'));

  var AboutController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutController = $controller('AboutController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AboutController.awesomeThings.length).toBe(3);
  });
});
