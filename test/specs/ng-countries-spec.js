'use strict';

describe('ng-countries directives', function() {

  describe('<ghanoz-countries-typeahead>', function() {
    // load the directive's module
    beforeEach(module('ng-countries'));

    var element,
      scope;

    beforeEach(inject(function($rootScope, $compile) {
      element = angular.element('<ghanoz-countries-typeahead></ghanoz-countries-typeahead>');
      scope = $rootScope.$new();
      element = $compile(element)(scope);
      scope.$digest();
    }));

    it('should make hidden element visible and isolate the scope', function() {
      expect(element.attr('class')).toBe('container-fluid ng-scope ng-isolate-scope');
    });
  });


  describe('<ghanoz-countries-select>', function() {
    // load the directive's module
    beforeEach(module('ng-countries'));

    var element,
      scope;

    beforeEach(inject(function($rootScope, $compile) {
      element = angular.element('<ghanoz-countries-select></ghanoz-countries-select>');
      scope = $rootScope.$new();
      element = $compile(element)(scope);
      scope.$digest();
    }));

    it('should make hidden element visible and isolate the scope', function() {
      expect(element.attr('class')).toBe('ng-scope ng-isolate-scope ng-pristine ng-valid');
    });
  });

});