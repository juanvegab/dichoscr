'use strict';

/**
 * @ngdoc service
 * @name firebaseApp.Tags
 * @description
 * # Tags
 * Factory in the firebaseApp.
 */
angular.module('firebaseApp')
.factory('Tags', ['$firebaseArray', function ($firebaseArray) {
	var ref = new Firebase('https://torrid-fire-8997.firebaseio.com/tags');
	return $firebaseArray(ref);
}]);
