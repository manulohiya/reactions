'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute', 'myApp.controllers'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  	.when('/', {
  		templateUrl: 'templates/home.html',
  		controller: 'ReactionsCtrl'
  	})
  	.when('/topics', {
  		templateUrl: 'templates/topics.html',
  		controller: 'TopicsCtrl'

  	})
  	.when('/topics/:id',{
  		templateUrl: 'templates/reaction.html',
  		controller: 'ReactionsCtrl'
  	})
  	
  	 
  
}])

;
