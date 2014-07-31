angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ui.router',
  'ngSandbox',
  'lndTreeView',
  'cicstart-vfs',
  'blog'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/sandbox' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });

  var date = new Date();
  $scope.year = date.getFullYear();
  $scope.viewName = {name:'main'};
})

;

