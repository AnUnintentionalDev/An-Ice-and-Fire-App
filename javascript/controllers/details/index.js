app.controller("detailsController", ['$routeParams', '$http', 'detailsDataService', '$scope', function($routeParams, $http, detailsDataService, $scope){

  $scope.type = $routeParams.type;
  $scope.value = $routeParams.value;

  $scope.data = [];
  $scope.currentClickedData = {};
  $scope.baseUrl = 'https://anapioficeandfire.com/api/';
  $scope.characterBooks = [];  // DEFINED-TO-SHOW-BOOKS-IN-CHARACTER-DETAILS


  // LOAD-HOUSE-DETAILS
  $scope.loadHouseDetails = function(){
      detailsDataService.getHousesDetails()
      .then(function (response){
        $scope.data = response.data;

        for(i in $scope.data){
          if($scope.value == $scope.data[i].name){

            $scope.currentClickedData = $scope.data[i];
            var overlordUrl = $scope.data[i].overlord ;
  					var currentlordUrl = $scope.data[i].currentLord ;
  					var heirUrl = $scope.data[i].heir ;

            console.log(overlordUrl);
            console.log(currentlordUrl);
            console.log(heirUrl);

  					if(overlordUrl != "" || overlordUrl != undefined)
  					     $scope.loadHouseOverlord(overlordUrl , 'o'); // o-> overlord
  					if(currentlordUrl != "" || currentlordUrl != undefined)
  					     $scope.loadHouseOverlord(currentlordUrl , 'c'); // c-> currentlord
  					if(heirUrl != "" || heirUrl != undefined)
  					     $scope.loadHouseOverlord(heirUrl , 'h'); // h-> heir
  				}
  			}
  			console.log($scope.currentClickedData);
        //console.log("Success response of Books Da$scope.currentClickedDatata");
        //console.log($scope.dataBooks);

      }, function(response){
          alert("Check console");
          console.log(response);

        });
  };
  // END-OF-LOAD-HOUSE-DETAILS

  // LOAD-BOOKS-DETAILS
  $scope.loadBooksDetails = function(){
    detailsDataService.getBooksDetails()
    .then( function (response){
      $scope.data = response.data;

      for(j in $scope.data){
        if($scope.value == $scope.data[j].isbn){
          $scope.currentClickedData = $scope.data[j];
        }
      }
      console.log($scope.currentClickedData);
    }, function(response){
        alert("Check console");
        console.log(response);

      });

  };
  // END-OF-LOAD-BOOKS-DETAILS

  // LOAD-CHARACTER-DETAILS
  $scope.loadCharactersDetails = function(){
    detailsDataService.getCharactersDetails()
    .then( function (response){
      $scope.data = response.data;

      for(k in $scope.data){
        if($scope.value === $scope.data[k].aliases[0]){
          $scope.currentClickedData = $scope.data[k];

          for(var l in $scope.data[k].books){
            $scope.bookUrl = $scope.data[k].books[l] ;
            $scope.loadCharacterBook(l);
          }

        }
      }
      console.log($scope.currentClickedData);
    }, function(response){
        alert("Check console");
        console.log(response);

      });

  };
  // END-OF-LOAD-CHARACTER-DETAILS

  // LOAD-CHARACTER-BOOKS
  $scope.loadCharacterBook = function(k) {

		$http({
			method : 'GET' ,
			url : $scope.bookUrl
		})
		.then( function(response){

			$scope.characterBooks[k] = response.data.name ;

		} , function(response){
			console.log(response);
			alert('error!');

		}) ;
	};
  // END-OF-LOAD-CHARACTER-BOOKS

  // LOAD-HOUSE-OVERLORD
  $scope.loadHouseOverlord = function(Url , identity) {

    $http({
			method : 'GET' ,
			url : Url
		})
		.then( function(response){

			if(identity == 'o')
				$scope.overlord = response.data.name;
			else if(identity == 'c')
				$scope.currentlord = response.data.name;
			else if(identity == 'h')
				$scope.heir = response.data.name;

		} , function(response){
		      console.log(response);
			    alert('error!');

		}) ;
	};
  // END-OF-LOAD-HOUSE-OVERLORD

  // LOAD-SPECIFIC-DATA-ON-TYPE-BASE
	if( $scope.type == 'houses'){
		$scope.loadHouseDetails();
	}
  if( $scope.type == 'books'){
		$scope.loadBooksDetails();
	}
  if( $scope.type == 'characters'){
		$scope.loadCharactersDetails();
	}
  // END-OF-LOAD-SPECIFIC-DATA-ON-TYPE-BASE
}]);
