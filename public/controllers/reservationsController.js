var app = angular.module('myApp3',[]);

app.controller('ReservationsController', ['$scope','$http',function($scope, $http){

$scope.makeReservation = function(){
    console.log($scope.reservation);
    $http.post('/reservationsQueue',$scope.reservation).then(function(response){
        console.log(response);
    });

    window.location.href = "end.html";

};

}]);