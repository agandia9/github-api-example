var app = angular.module('githubApp')
app.factory('mainFactory', function($http){
	var getRepos = function (user){
		// https://api.github.com/users/agandia9/repos
		return $http.get('https://api.github.com/users/' + user +'/repos').then(function(response){
			return response.data
		}).catch(function(e){
			return e
		})
	}
	return{ 
		getRepos:getRepos
	}
})