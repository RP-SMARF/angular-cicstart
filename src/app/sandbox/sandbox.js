angular.module('ngSandbox',[
	'ui.router',
	'lvl.directives.dragdrop'

])


.config(function config($stateProvider){
	$stateProvider.state('sandbox',{
		url:'/sandbox',
		views: {
			"main":{
				controller: 'SandboxCtrl',
				templateUrl: 'sandbox/sandbox.tpl.html'
			}
		},
		data: {pageTitle: 'Sandbox'}
	});
})


.controller('SandboxCtrl', function SandboxController($scope){
	console.log("In sbctrl");
	$scope.dropped = function(dragEl, dropEl){
		console.log("in onDrop");
		//this is application logic, for the demo we just want to color the grid squares
		//the directive provides a native dom object, wrap with jqlite
		var drop = angular.element(dropEl);
		var drag = angular.element(dragEl);
	
		//clear the previously applied color, if it exists
		var bgClass = drop.attr('data-color');
		if (bgClass) {
			drop.removeClass(bgClass);
		}

		//add the dragged color
		bgClass = drag.attr("data-color");
		drop.addClass(bgClass);
		drop.attr('data-color', bgClass);

		//if element has been dragged from the grid, clear dragged color
		if (drag.attr("x-lvl-drop-target")) {
			drag.removeClass(bgClass);
		}
		if(!drop.attr('draggable')){
			drop.attr('draggable', "true");
		}
		if(drag.attr('draggable') && drag.parent().attr('id')!='colours'){
			drag.removeAttr('draggable');
		}
	};

});