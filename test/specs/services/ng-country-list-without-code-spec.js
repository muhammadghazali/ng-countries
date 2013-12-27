'use strict';

describe('Service: CountryListWithoutCode', function() {

  var CountryListWithoutCode;

  // load the directive's module
  beforeEach(module('ng-countries'));

  beforeEach(inject(function($injector) {
    CountryListWithoutCode = $injector.get('CountryListWithoutCode');
  }));

  it('should load the module', function() {
    expect(CountryListWithoutCode).toBeDefined();
  });

  it('should return an array of data 243 CountryListWithoutCode', function() {
    expect(CountryListWithoutCode.length).toEqual(243);
  });

  it('should only contained country name', function() {
    expect(CountryListWithoutCode[0].hasOwnProperty('name')).toBe(false);
    expect(CountryListWithoutCode[0].hasOwnProperty('code')).toBe(false);
  });
});