'use strict';

/**
 * @ngdoc function
 * @name firebaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firebaseApp
 */
angular.module('firebaseApp')
.controller('MainCtrl', ['$scope', 'Quotes', 'Tags', function ($scope, Quotes, Tags) {
	
	this.quotes = Quotes;
	this.tags = Tags;

	this.quote = {author: '', quote: '', date: new Date(), tags: []};
	
	this.addQuote = function() {

	};
	
	$('.carousel').carousel();
}]);