angular.module('cicstart-vfs.service', ['ngResource'])

.factory('CICSTART', ['$resource', function($resource){
	
	var resourceService = {};
	var session = '';
	resourceService = $resource(' http://localhost:8080/cicstart/api/:module/:type/:userId/:command',{},{
		ls: {method:'GET', params:{module: 'vfs', type: 'filesystem', userId:'2', command:'ls',path:'/'},headers:{'CICSTART.session': function(){return resourceService.getSessionVal();}},isArray:false
		},
		getSession: {method: 'POST', url:'http://localhost:8080/cicstart/api/auth/session',params:{username:'melendez@sce.carleton.ca', password:'tigris' }, headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}, isArray:false
		}
	});


	resourceService.setSession = function(_session_)
	{
		session = _session_;
	};
	resourceService.getSessionVal = function () {
		return session;
	};
	return resourceService;//{'resourceService':resourceService, 'sessionVal':session};
}]);