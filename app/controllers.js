angular.module('myApp.controllers',[])

	.controller('ReactionsCtrl', ['$scope', '$sce', function($scope, $sce){

		console.log('reactions controller working')

		$scope.reactions = [{
	   	    gif: "//giphy.com/embed/xTiTnngt1MsrXlpIPe",
	   	   	author: 'Katie'
	  	},
	  		{
	   	    gif: "//giphy.com/embed/V2CPDf8e6zs6k",
	   	   	author: 'Neil'
	  	}

	  	];

	  	$scope.trust = function(srcUrl) {
	  		return $sce.trustAsResourceUrl(srcUrl);
	  	}

	  	console.log("List of reactions:",$scope.reactions)


	}])


	;