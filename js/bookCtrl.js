angular.module( 'devmtnTravel' ).controller( 'bookCtrl', function( $scope, mainSrv, $state ){



  $scope.book = function(){
    var destinationId = $state.params.id;
    for (var i = 0; i < mainSrv.travelInfo.length; i++){
      if(mainSrv.travelInfo[i].id == destinationId){
        destination = mainSrv.travelInfo[i];
      }
    }
    return destination;
  };


});
