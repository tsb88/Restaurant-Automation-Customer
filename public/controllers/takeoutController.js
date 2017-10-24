var app = angular.module('myApp2',[]);

app.controller('TakeoutController', ['$scope','$http',function($scope, $http){

    $scope.apps = 0;
    $scope.ent = 0;
    $scope.des = 0;
    $scope.dri = 0;
    $scope.subTotal = 0;
    $scope.totalTax = 0;
    $scope.totalCost = 0;

    var addTotalApps = function(appAmt){
        $scope.apps += appAmt;
        $scope.subTotal += appAmt;
        $scope.totalTax = $scope.totalTax + (0.07*$scope.subTotal);
        $scope.totalCost = $scope.totalTax + $scope.subTotal;
    }

    var addTotalEnt = function(entAmt){
        $scope.ent += entAmt;
        $scope.subTotal += entAmt;
        $scope.totalTax = $scope.totalTax + (0.07*$scope.subTotal);
        $scope.totalCost = $scope.totalTax + $scope.subTotal;
    }

    var addTotalDes = function(desAmt){
        $scope.des += desAmt;
        $scope.subTotal += desAmt;
        $scope.totalTax = $scope.totalTax + (0.07*$scope.subTotal);
        $scope.totalCost = $scope.totalTax + $scope.subTotal;
    }

    var addTotalDri = function(driAmt){
        $scope.dri += driAmt;
        $scope.subTotal += driAmt;
        $scope.totalTax = $scope.totalTax + (0.07*$scope.subTotal);
        $scope.totalCost = $scope.totalTax + $scope.subTotal;
    }

	var refresh = function(){
    $http.get('/menu').then(function(response){
        console.log("Received the data: " + response.data);
        $scope.menu = response.data;
    });
};

refresh();

var refresh2 = function(){
    $http.get('/menu2').then(function(response){
        console.log("Received the data: " + response.data);
        $scope.menu2 = response.data;
    });
};

refresh2();

var refresh3 = function(){
    $http.get('/menu3').then(function(response){
        console.log("Received the data: " + response.data);
        $scope.menu3 = response.data;
    });
};

refresh3();

var refresh4 = function(){
    $http.get('/menu4').then(function(response){
        console.log("Received the data: " + response.data);
        $scope.menu4 = response.data;
    });
};

refresh4();

$scope.dataApps = {};
$scope.dataEntrees = {};
$scope.dataDesserts = {};
$scope.dataDrinks = {};

$scope.dataApps.selectedApps = 'current';
$scope.dataEntrees.selectedEntrees = 'current';
$scope.dataDesserts.selectedDesserts = 'current';
$scope.dataDrinks.selectedDrinks = 'current';

$scope.orderQueue = {};

$scope.submitOrder = function(){
    if ($scope.totalCost === 0)
    {
        alert("Please order an item before submitting");
    }
    else
    {
        window.location.href = "submitOrder.html";
    }
};

$scope.placeOrder = function(){
    console.log($scope.customer);
    $http.post('/customer',$scope.customer).then(function(response){
        console.log(response);
    });

    window.location.href = "index.html";
};

$scope.addApp = function(){

    if ($scope.dataApps.selectedApps != 0){
    $scope.orderQueue.name = $scope.dataApps.selectedApps.name;
    $scope.orderQueue.table = 'takeout';
    $http.post('/orderQueue',$scope.orderQueue).then(function(response){
        console.log(response);
    });

    addTotalApps($scope.dataApps.selectedApps.price);
}

};

$scope.addEnt = function(){

    if ($scope.dataApps.selectedApps != 0){
    $scope.orderQueue.name = $scope.dataEntrees.selectedEntrees.name;
    $scope.orderQueue.table = 'takeout';
    $http.post('/orderQueue',$scope.orderQueue).then(function(response){
        console.log(response);
    });

    addTotalEnt($scope.dataEntrees.selectedEntrees.price);
}
};

$scope.addDes = function(){
    if ($scope.dataApps.selectedApps != 0){
    $scope.orderQueue.name = $scope.dataDesserts.selectedDesserts.name;
    $scope.orderQueue.table = 'takeout';
    $http.post('/orderQueue',$scope.orderQueue).then(function(response){
        console.log(response);
    });

    addTotalDes($scope.dataDesserts.selectedDesserts.price);
}
};

$scope.addDri = function(){

    if ($scope.dataApps.selectedApps != 0){
    $scope.orderQueue.name = $scope.dataDrinks.selectedDrinks.name;
    $scope.orderQueue.table = 'takeout';
    $http.post('/orderQueue',$scope.orderQueue).then(function(response){
        console.log(response);
    });

    addTotalDri($scope.dataDrinks.selectedDrinks.price);
}
};

}]);


