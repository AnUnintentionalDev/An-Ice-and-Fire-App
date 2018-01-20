angular.module('IceFireApp', ['ngRoute'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    redirectTo: 'index.html'
  })
  .when('/books', {
    templateUrl : 'templates/pages/books/index.html',
    controller  : 'getBooksController',
    controllerAs: 'booksCtrl'
  })
  .when('/characters' , {
    templateUrl : 'templates/pages/characters/index.html',
    controller  : 'getCharactersData',
    controllerAs: 'charactersCtrl'
  });
}]);
