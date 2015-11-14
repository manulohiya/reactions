angular.module('myApp.controllers',[])

	.controller('MainCtrl', ['$scope', function($scope) {
	console.log("Main Controller is working like a BOSS")
	}])

	.controller('ReactionsCtrl', ['$scope', '$sce', function($scope, $sce){

		console.log('reactions controller working')

		Parse.initialize("c5ajBRrQnBB3ZtvP67Bm2NFCPY0988b7HAnC3lND", "esGU3RcxDebLw9ZEDTfuuTAh8dS2KM053LQHgdfT");

	 	var ReactionObject = Parse.Object.extend("ReactionObject");
	
	var viewAll = function() { 
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
	}   

	viewAll();	

   		$scope.trust = function(srcUrl) {
			return $sce.trustAsResourceUrl(srcUrl);
		}		

		$scope.addReaction = function() {		  
			
			// Updating DOM
			console.log("Reactiong arg: ", $scope.Reaction)
			console.log("Before ", $scope.reactions)
			$scope.reactions.push({
				gif: $scope.Reaction.url,
				author: $scope.Reaction.author
			})
			// console.log("r ", r)
			console.log("After ", $scope.Reaction)

			// Saving to parse
	  		var ReactionObject = Parse.Object.extend("ReactionObject");
			var reaction = new ReactionObject();

			reaction.set("author", $scope.Reaction.author);
			reaction.set("gif", $scope.Reaction.url);
			reaction
			.save(null, {
				success: function(reaction){
					console.log("object saved with ID", reaction.id)

				},
				error: function(reaction, error) {
					console.log("object NOT saved with error code", error.message);
				}
			})



	  	}
	
	}])

	.controller('TopicsCtrl', ['$scope', '$sce', function($scope, $sce){

		console.log('topics controller working')

		Parse.initialize("c5ajBRrQnBB3ZtvP67Bm2NFCPY0988b7HAnC3lND", "esGU3RcxDebLw9ZEDTfuuTAh8dS2KM053LQHgdfT");

	 	var TopicObject = Parse.Object.extend("TopicObject");
	
	var viewAllTopics = function() { 
		var query = new Parse.Query(TopicObject);
		
		$scope.topics = [];
		query.find({
  			success: function(results) {   			 	
   			 	$scope.$apply(function() {		    		
		    		 for (var i = 0; i < results.length; i++) {
	      				var object = results[i];	      		      				
	      				topic = {}					
	      				topic.title = object.get('title')
	    				
						$scope.topics.push(topic)	
							
    				}    				
    			})
   			 }
   		})
	}   

	viewAllTopics();	

	$scope.addTopic = function() {		  
			
			// Updating DOM
			console.log("Reactiong arg: ", $scope.Topic)
			// console.log("Before ", $scope.topics)
			$scope.topics.push({
				title: $scope.Topic.title
				
			})
			
			

			// Saving to parse
	  		var TopicObject = Parse.Object.extend("TopicObject");
			var topic = new TopicObject();

			topic.set("title", $scope.Topic.title);
			
			topic
			.save(null, {
				success: function(topic){
					console.log("object saved with ID", topic.id)

				},
				error: function(topic, error) {
					console.log("object NOT saved with error code", error.message);
				}
			})



	  	}

	}])  	

	;