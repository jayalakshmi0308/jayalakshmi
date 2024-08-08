




var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'dashboardCtrl'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'registerCtrl'
        })
        .when('/signin', {
            templateUrl: 'views/signin.html',
            controller: 'signinCtrl'
        })
        .when('/menu', {
            templateUrl: 'views/menu.html',
            controller: 'menuCtrl'
        })
        .when('/cart', {
            templateUrl: 'views/cart.html',
            controller: 'cartCtrl'
        })
        .otherwise({
            redirectTo: '/signin'
        });
}]);





// var app = angular.module('app', []);
// app.controller('menuCtrl', ['$scope', '$http', function($scope, $http) {
//     var apiKey = '18ac5e05ee504848a6736921760327f9';
//     var apiUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=' + apiKey;

//     $scope.cart = [];

//     $http.get(apiUrl)
//     .then(function(response){
//         $scope.salads = response.data.results;
//     }, function(error){
//         console.log("Error fetching menu data", error);
//     });

//     $scope.selectedSalad = null;

//     $scope.showDetails = function(salad) {
//         var detailsUrl = 'https://api.spoonacular.com/recipes/' + salad.id + '/information?apiKey=' + apiKey;

//         $http.get(detailsUrl)
//         .then(function(response){
//             $scope.selectedSalad = response.data;
//         }, function(error){
//             console.log("Error fetching salad details", error);
//         });
//     };

//     $scope.addToCart = function() {
//         if ($scope.selectedSalad) {
//             var itemExists = $scope.cart.some(item => item.id === $scope.selectedSalad.id);

//             if (!itemExists) {
//                 $scope.cart.push($scope.selectedSalad);
//                 $scope.selectedSalad = null;
//                 alert("Added to cart!");
//             } else {
//                 alert("Item is already in the cart!");
//             }
//         }
//     };

//     $scope.orderCart = function() {
//         if ($scope.cart.length > 0) {
//             alert("Order is ready and will be delivered in 20 minutes!");
//             $scope.cart = [];
//         } else {
//             alert("Your cart is empty!");
//         }
//     };
// }]);
