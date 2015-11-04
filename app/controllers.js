angular.module('myApp.controllers',[])

	.controller('MainCtrl', ['$scope', function($scope) {
	console.log("Main Controller is working like a BOSS")
	}])

	.controller('ReactionsCtrl', ['$scope', '$sce', function($scope, $sce){

		console.log('reactions controller working')

		Parse.initialize("c5ajBRrQnBB3ZtvP67Bm2NFCPY0988b7HAnC3lND", "esGU3RcxDebLw9ZEDTfuuTAh8dS2KM053LQHgdfT");

	 	var ReactionObject = Parse.Object.extend("ReactionObject");
		var query = new Parse.Query(ReactionObject);
		
		$scope.reactions = [];

		query.find({
  			success: function(results) {   			 	
   			 	$scope.$apply(function() {		    		
		    		 for (var i = 0; i < results.length; i++) {
	      				var object = results[i];	      			
	      				
	      				reaction = {}					
	      				reaction.gif = object.get('gif')
	    				reaction.author = object.get('author')
							$scope.reactions.push(reaction)	
							
    				}    				
    			})
   			 }
   		})

	   	   		$scope.trust = function(srcUrl) {
	  				
	  				return $sce.trustAsResourceUrl(srcUrl);
	  			}		
	  	
	}])

	.controller('SaveCtrl', ['$scope',function($scope){

		Parse.initialize("c5ajBRrQnBB3ZtvP67Bm2NFCPY0988b7HAnC3lND", "esGU3RcxDebLw9ZEDTfuuTAh8dS2KM053LQHgdfT");

		$scope.addReaction = function() {		  

	  		var ReactionObject = Parse.Object.extend("ReactionObject");
			var reaction = new ReactionObject();

			reaction.set("author", "Neil");
			reaction.set("gif", "//giphy.com/embed/V2CPDf8e6zs6k");


			reaction
			.save(null, {
				success: function(reaction){
					console.log("object saved with ID", reaction.id);

				},
				error: function(reaction, error) {
					console.log("object NOT saved with error code", error.message);
				}
			})

	  	}
	}])


	;