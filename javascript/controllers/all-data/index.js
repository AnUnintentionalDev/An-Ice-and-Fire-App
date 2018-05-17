app.controller('allDataController', ['getAllData', '$scope', function(getAllData, $scope){

  $scope.allData = [];
  $scope.dataBooks = [];
  $scope.dataHouses = [];
  $scope.dataCharacters = [];

  $scope.loadAllDetails = function(){
    //BOKS-API-DATA
    $scope.booksAPI = function(){
      getAllData.getAllBooks()
      .then(function (response){
        $scope.dataBooks = response.data;
        main.dataBooks = response.data;
        console.log("Success response of Books Data");
        console.log($scope.dataBooks);

        for(var i in $scope.dataBooks){
          $scope.allData.push($scope.dataBooks[i]);
        }
      }, function(response){
  				alert("Check console");
  				console.log(response);

  			}); // async func end here
    }();

    //CHARCTERS-API-DATA
    $scope.charactersAPI = function(){
      getAllData.getAllCharacters()
      .then(function (response){
        $scope.dataCharacters = response.data;
        console.log("Success response of Characters Data");
        console.log($scope.dataCharacters);

        for(var i in $scope.dataCharacters){
          $scope.allData.push($scope.dataCharacters[i]);
        }
      }, function(response){
  				alert("Check console");
  				console.log(response);

  			}); // async func end here
    }();

    //HOUSES-API-DATA
    $scope.houseAPI = function(){
      getAllData.getAllHouses()
      .then(function (response){
        $scope.dataHouses = response.data;
        console.log("Success response of Houses Data");
        console.log($scope.dataHouses);

        for(var i in $scope.dataHouses){
          $scope.allData.push($scope.dataHouses[i]);
        }
      }, function(response){
  				alert("Check console");
  				console.log(response);

  			}); // async func end here
    }();


  }

  //console.log($scope.allData);
}]);
