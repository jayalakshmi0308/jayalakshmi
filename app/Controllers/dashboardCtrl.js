





var app1 = angular.module("app1", []);

app1.controller('dashboardCtrl', ['$scope', '$location', function($scope, $location) {
    
    $scope.user = {
        name: 'Guest',
        role: 'Visitor'
    };

    $scope.dishes = [
       
        { id: 1, name: 'Caesar Salad', price: 12.99, calories: 250, image: 'path/to/caesar-salad.jpg' },
        { id: 2, name: 'Greek Salad', price: 10.99, calories: 200, image: 'path/to/greek-salad.jpg' }
    ];

    $scope.selectedDish = null;
    $scope.cart = [];

    
    $scope.selectDish = function(dish) {
        $scope.selectedDish = dish;
    };

    
    $scope.addToCart = function(dish) {
        if (!$scope.cart.includes(dish)) {
            $scope.cart.push(dish);
        }
        $scope.selectedDish = null; 
    };

    
    $scope.goToCart = function() {
        $location.path('/cart');
    };

    
    $scope.logout = function() {
        $scope.user = {
            name: 'Guest',
            role: 'Visitor'
        };
        $location.path('/signin');
    };

   
    $scope.getUserInfo = function() {
        
    };

    
    $scope.getUserInfo();
}]);