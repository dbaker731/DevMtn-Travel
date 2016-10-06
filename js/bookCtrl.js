angular.module( 'devmtnTravel' ).controller( 'bookCtrl', function( $scope, mainSrv, $state ){



  $scope.book = function(){
    var destinationId = $state.params.id;
    for (var i = 0; i < $scope.travelInfo.length; i++){
      if($scope.travelInfo[i].id == destinationId){
        destination = $scope.travelInfo[i];
      }
    }
    return destination;
  };




});
