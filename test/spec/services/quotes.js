'use strict';

describe('Service: Quotes', function () {

  // load the service's module
  beforeEach(module('firebaseApp'));

  // instantiate service
  var Quotes;
  beforeEach(inject(function (_Quotes_) {
    Quotes = _Quotes_;
  }));

  it('should do something', function () {
    expect(!!Quotes).toBe(true);
  });

});
