'use strict';

/**
 * @ngdoc service
 * @name firebaseApp.Quotes
 * @description
 * # Quotes
 * Factory in the firebaseApp.
 */
angular.module('firebaseApp')
.factory('Quotes', ['$firebaseArray', function ($firebaseArray) {
	var ref = new Firebase('https://torrid-fire-8997.firebaseio.com/quotes');
	return $firebaseArray(ref);
}]);
