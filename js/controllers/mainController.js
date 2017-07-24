var app = angular.module('githubApp')
app.controller('mainController', function($scope, mainFactory){
	$scope.searchRepos = function(){
		mainFactory.getRepos($scope.user)
		.then(function(listRepos){
			if (listRepos.status === 404) {
				console.log('error')
			}
			else{
				console.log(listRepos)
				$scope.listRepos = listRepos
			}
		})
	}
})