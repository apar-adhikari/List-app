var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
   .when('/home',{
     templateUrl: '/views/home.html'
   })
   .when('/directory',{
     templateUrl: 'views/directory.html',
     controller: 'ItemController'
   }).otherwise({
     redirectTo: '/home'
   });
}]);

// myApp.controller('ItemController',function($scope){
//   $scope.message = "Hello";
//   $scope.items = ['Oil','Chips','Noodles','Eggs'];
// });

myApp.controller('ItemController',['$scope',function($scope){ //Best practice to provide dependecies like $scope as an array

  $scope.removeItem = function(item){
    var removedItem = $scope.items.indexOf(item);
    $scope.items.splice(removedItem, 1);
  }

  $scope.addItem = function(){
    $scope.items.push({
      name : $scope.newItem.name,
      label : $scope.newItem.label,
      quantity : parseInt($scope.newItem.quantity),
      available : true
    });

    $scope.newItem.name = "";
    $scope.newItem.label = "";
    $scope.newItem.quantity = "";
  }

  $scope.items = [
    {
      name : 'Biscuits',
      label : 'Red',
      quantity : 1,
      available : true
    },
    {
      name : 'Cabbage',
      label : 'Green',
      quantity : 1,
      available : true
    },
    {
      name : 'Eggs',
      label : 'Yellow',
      quantity : 15,
      available : true
    },
    {
      name : 'Milk',
      label : 'Gray',
      quantity : 2,
      available : true
    },
    {
      name : 'Oil',
      label : 'Orange',
      quantity : 1,
      available : true
    }
  ];
}]);
