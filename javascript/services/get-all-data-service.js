app.factory('getAllData', function getAllDataFactory($http){
    var main = this;
    this.baseUrl = 'https://www.anapioficeandfire.com/api/';
    console.log(this.baseUrl);

    return{
      getAllBooks : function(){
        return $http({
          method: 'GET',
          url: main.baseUrl+'books'
        });
      },
      getAllCharacters : function(){
        return $http({
          method: 'GET',
          url: main.baseUrl+'characters'
        });
      },
      getAllHouses : function(){
        return $http({
          method: 'GET',
          url: main.baseUrl+'houses'
        });
      }
    };
});
