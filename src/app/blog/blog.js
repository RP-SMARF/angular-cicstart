angular.module('blog', [
	'ui.router',
	'ipCookie',
	'ngResource',
	'restangular'
])


.config(function($stateProvider){
	$stateProvider
	.state('blog',{
		url:'/blog',
		views: {
			"main":{
				controller: 'BlogCtrl',
				templateUrl: 'blog/blog.tpl.html'
			},
			"entries":{
				templateUrl: 'blog/entries.tpl.html'
			}
		},
		data: {pageTitle: 'Django Blog App'}
	})
	.state('entries',{
		url:'/blog/entries',
		views: {
			"main":{
				controller: 'EntriesCtrl',
				templateUrl: 'blog/entries.tpl.html'
			}
		},
		data: {pageTitle: 'Blog Entries'}
	});
})



.controller('BlogCtrl', ['$scope','ipCookie','$resource','$state', function($scope,ipCookie,$resource,$state){

	var getEntry = $resource('/api/v1/entry/schema/?format=json',{},{
		authenticate: {method:'POST',headers:{'X-CSRFToken': function(){ return ipCookie('csrftoken');}},isArray:false
		}
	});

	console.log(document.location.hash);
	console.log($scope);
	console.log($state);
	if(document.location.hash.indexOf('?view=entries') >=0)
	{
		//$state.go('entries');
	}

	$scope.submit = function(){


	};
	

	

}])

.controller('EntriesCtrl', ['$scope','ipCookie','$resource','$state','Restangular', function($scope,ipCookie,$resource,$state,Restangular){

	Restangular = Restangular.withConfig(function(RestangularConfigurer){
		RestangularConfigurer.setBaseUrl('/api/v1');
	});
	$scope.entries = {};
	entriesResource = Restangular.one('entry');
	entriesResource.get({'format':'json'},{'X-CSRFToken': ipCookie('csrftoken')}).then(function(data){
		console.log(data);
		$scope.entries = data.objects;
	});
	

}]);