app.directive("bookTemplate", function(getAllData){
  return {
    restrict: 'E',
    templateUrl: "templates/directives/book-template.html",
    controller: function($scope, $route){
        $scope.loadAllDetails();

        angular.element("#reloadRoute").click(function(){
          $route.reload();
        })
    }
  }
});
