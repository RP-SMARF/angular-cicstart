angular.module('cicstart-vfs', [
	'ui.router',
	'ui.bootstrap',
	'ipCookie',
	'cicstart-vfs.service'
])


.config(function($stateProvider){
	$stateProvider.state('vfs',{
		url:'/vfs',
		views: {
			"main":{
				controller: 'VfsCtrl',
				templateUrl: 'vfs/vfs.tpl.html'
			}
		},
		data: {pageTitle: 'CICSTART VFS'}
	});
})



.controller('VfsCtrl', ['$scope','CICSTART','ipCookie', function($scope,CICSTART,ipCookie){

	console.log("Hello, VFS world!");
	$scope.entries = {};
	var rootPath = '/';
	if(!ipCookie('CICSTART_session'))
	{
		CICSTART.getSession({},'',function(response){
			console.log('Session: '+ JSON.stringify(response.session));
			CICSTART.setSession(response.session);
			ipCookie('CICSTART_session', response.session,{expires: 2, domain:'.rpsmarf.ca'});
			doLs(rootPath);
			
		});

	}
	else
	{
		CICSTART.setSession(ipCookie('CICSTART_session'));
		doLs(rootPath);
	}
	

	function doLs(pathString)
	{
		var lsResult = CICSTART.ls({path: pathString},function(response){
			console.log("ls result: "+ JSON.stringify(response.entries) +"\n"+ JSON.stringify(response.path));
			$scope.entries = response.entries;
			});
	}

	

	

}]);