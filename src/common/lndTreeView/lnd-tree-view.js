//var scripts = document.getElementsByTagName("script");
//var currentScriptPath = scripts[scripts.length-1].src;

angular.module("lndTreeView", ['cicstart-vfs'])

.directive('lndTree',['CICSTART',function(CICSTART){

	return {
		restrict: 'E',
		scope:{
			entries: '='
		},
		templateUrl:  'lndTreeView/lnd-tree.tpl.html',
		link: function(scope, element, attrs)
		{
			scope.getDirContents = function(pathString, entry)
			{
				console.log("pathString: "+ pathString);
				console.log(entry);
				var STRING_STATIC = 'path=';
				pathString = pathString.substring(pathString.indexOf(STRING_STATIC)+STRING_STATIC.length);
				if(pathString.substring(0,1) != "/"){
					pathString = "/"+pathString;
				}
				console.log('in getDirContents through scope! Getting contents with pathString: '+ pathString);
				var lsResult = CICSTART.ls({path: pathString},function(response){
					console.log("ls result from directive: "+ JSON.stringify(response.entries) +"\n"+ JSON.stringify(response.path));
					//$scope.entry.nodes = response.entries;
					entry.nodes = response.entries;
				});
				
				
			};

			scope.getRootContents = function(pathString, index)
			{
				var STRING_STATIC = 'path=';
				pathString = pathString.substring(pathString.indexOf(STRING_STATIC)+STRING_STATIC.length+1);
				console.log('in getRootContents through scope!');
				var lsResult = CICSTART.ls({path: pathString},function(response){
					console.log("ls result from directive: "+ JSON.stringify(response.entries) +"\n"+ JSON.stringify(response.path));
					//$scope.entry.nodes = response.entries;
					
					scope.entries[index].nodes = response.entries;
					
				});
			};
			
		},
		controller: function($scope) {


		}
		
	};




}]);