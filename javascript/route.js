app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){

  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    templateUrl: 'templates/pages/all-data/index.html',
    controller  : 'allDataController'
  })
  .when('/:type/:value', {
    templateUrl : 'templates/pages/details/index.html',
    controller  : 'detailsController'
  })
  .otherwise({
    template   : '<h1 style="margin-top:100px;">Error 404 : Page not found</h1>'
  });

}]);
