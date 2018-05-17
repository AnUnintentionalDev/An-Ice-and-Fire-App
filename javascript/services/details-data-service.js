app.factory('detailsDataService', function detailsDataServiceFactory($http){
    var main = this;
    this.baseUrl = 'https://www.anapioficeandfire.com/api/';
    console.log(this.baseUrl);

    return{
      getBooksDetails : function(){
        return $http({
          method: 'GET',
          url: main.baseUrl+'books'
        });
      },
      getCharactersDetails : function(){
        return $http({
          method: 'GET',
          url: main.baseUrl+'characters'
        });
      },
      getHousesDetails : function(){
        return $http({
          method: 'GET',
          url: main.baseUrl+'houses'
        });
      }
    };
});
