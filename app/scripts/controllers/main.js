'use strict';

/**
 * @ngdoc function
 * @name firebaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firebaseApp
 */
angular.module('firebaseApp')
.controller('MainCtrl', ['$scope', 'Quotes', 'Tags', '$firebaseAuth', 
				function ($scope, Quotes, Tags, $firebaseAuth) {
	
	this.quotes = Quotes;
	this.tags = Tags;
	this.quote = {author: '', quote: '', date: new Date(), tags: []};
	this.auth = null;
	this.authData = null;

	var self = this;

	this.addQuote = function() {

	};

	this.authenticate = function() {
		this.auth = $firebaseAuth(new Firebase('https://torrid-fire-8997.firebaseio.com/'));
		this.auth.$authWithOAuthPopup("facebook").then(function(authData) {
			self.authData = authData;
			console.log("Logged in as:", authData.uid);
		}).catch(function(error) {
			console.log("Authentication failed:", error);
		});
	};
	
	$('.carousel').carousel();
}]);