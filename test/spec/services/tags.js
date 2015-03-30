'use strict';

describe('Service: Tags', function () {

  // load the service's module
  beforeEach(module('firebaseApp'));

  // instantiate service
  var Tags;
  beforeEach(inject(function (_Tags_) {
    Tags = _Tags_;
  }));

  it('should do something', function () {
    expect(!!Tags).toBe(true);
  });

});
