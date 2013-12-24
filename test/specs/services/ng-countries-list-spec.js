'use strict';

describe('Service: CountryList', function() {

  var CountryList;

  // load the directive's module
  beforeEach(module('ng-countries'));

  beforeEach(inject(function($injector) {
    CountryList = $injector.get('CountryList');
  }));

  it('should load the module', function() {
    expect(CountryList).toBeDefined();
  });

  it('should return an array of data 243 CountryList', function() {
    expect(CountryList.length).toEqual(243);
  });

  it('should contained country name nad code', function() {
    expect(CountryList[0].hasOwnProperty('name')).toBe(true);
    expect(CountryList[0].hasOwnProperty('code')).toBe(true);
  });
});