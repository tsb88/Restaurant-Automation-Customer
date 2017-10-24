var app = angular.module('myApp',[]);

app.controller('AppController', ['$scope','$http',function($scope, $http){
	console.log("Hello from controller");

var refresh = function(){
    $http.get('/menu').then(function(response){
        console.log("Received the data: " + response.data);
        $scope.menu = response.data;
    });
};

refresh();

var refresh2 = function(){
    $http.get('/menu2').then(function(response){
        console.log("Received the data2: " + response.data);
        $scope.menu2 = response.data;
    });
};

refresh2();

var refresh3 = function(){
    $http.get('/menu3').then(function(response){
        console.log("Received the data3: " + response.data);
        $scope.menu3 = response.data;
    });
};

refresh3();

var refresh4 = function(){
    $http.get('/menu4').then(function(response){
        console.log("Received the data4: " + response.data);
        $scope.menu4 = response.data;
    });
};

refresh4();

$scope.dairyFilter = 0;
$scope.nutsFilter = 0;
$scope.vegFilter = 0;

$scope.dairyChange = function(){
    if ($scope.dairyFilter === 0)
    {
        $scope.dairyFilter = true;
    }
    else
    {
        $scope.dairyFilter = 0;
    }
}

$scope.nutsChange = function(){
    if ($scope.nutsFilter === 0)
    {
        $scope.nutsFilter = true;
    }
    else
    {
        $scope.nutsFilter = 0;
    }
}

$scope.vegChange = function(){
    if ($scope.vegFilter === 0)
    {
        $scope.vegFilter = false;
    }
    else
    {
        $scope.vegFilter = 0;
    }
}

}]);
