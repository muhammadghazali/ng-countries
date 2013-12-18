'use strict';

describe('ng-countries', function() {

  // load the directive's module
  beforeEach(module('ng-countries'));
  beforeEach(module('templates/typeahead-countries.html'));

  var element,
    scope;

  beforeEach(inject(function($rootScope, $compile) {
    element = angular.element('<countries></countries>');
    scope = $rootScope.$new();
    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should make hidden element visible', function() {
    expect(element.attr('class')).toBe('container-fluid');
    expect(element.attr('ng-controller')).toBe('CountriesTypeAheadCtrl');
  });
});