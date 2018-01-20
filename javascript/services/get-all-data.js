angular.module('IceFireApp', [])
.factory('getRequestService', ['$http', function getRequestServiceFactory($http){
    //var main = this;
    //var baseUrl = 'https://www.anapioficeandfire.com/api';
    //console.log(this.baseUrl);

    return {
      getAllBooks : function (){
        return $http({
          method: 'GET',
          url: 'https://www.anapioficeandfire.com/api/books'
        });
      },
      getAllCharacters : function(){
        return $http({
          method: 'GET',
          url: 'https://www.anapioficeandfire.com/api/characters'
        });
      },
      getAllHouses: function(){
        return $http({
          method: 'GET',
          url: 'https://www.anapioficeandfire.com/api/houses'
        });
      }
    };
}]);
