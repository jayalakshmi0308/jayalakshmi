


app.controller('menuCtrl', ['$scope', '$http', function($scope, $http) {
    var apiKey = '18ac5e05ee504848a6736921760327f9';
    var apiUrl = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=' + apiKey;

    $scope.cart = JSON.parse(localStorage.getItem('cart')) || [];
    $scope.notification = '';

    $http.get(apiUrl)
    .then(function(response){
        $scope.salads = response.data.results;
    }, function(error){
        console.log("Error fetching menu data", error);
    });

    $scope.selectedSalad = null;

    $scope.showDetails = function(salad) {
        var detailsUrl = 'https://api.spoonacular.com/recipes/' + salad.id + '/information?apiKey=' + apiKey;

        $http.get(detailsUrl)
        .then(function(response){
            $scope.selectedSalad = response.data;
        }, function(error){
            console.log("Error fetching salad details", error);
        });
    };

    $scope.addToCart = function() {
        if ($scope.selectedSalad) {
            var itemExists = $scope.cart.some(item => item.id === $scope.selectedSalad.id);

            if (!itemExists) {
                $scope.cart.push($scope.selectedSalad);
                localStorage.setItem('cart', JSON.stringify($scope.cart));
                $scope.notification = "Your food added to cart!";
                setTimeout(function() {
                    $scope.$apply(function() {
                        $scope.notification = '';
                    });
                }, 3000);
                $scope.selectedSalad = null;
            } else {
                alert("Item is already in the cart!");
            }
        }
    };
}]);

app.controller('cartCtrl', ['$scope', function($scope) {
    $scope.cart = JSON.parse(localStorage.getItem('cart')) || [];

    $scope.orderCart = function() {
        if ($scope.cart.length > 0) {
            alert("Order is ready and will be delivered in 20 minutes!");
            $scope.cart = [];
            localStorage.removeItem('cart');
        } else {
            alert("Your cart is empty!");
        }
    };
}]);
app.controller('cartCtrl', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.cart = JSON.parse(localStorage.getItem('cart')) || [];
    $scope.orderPlaced = false;

    $scope.orderCart = function() {
        if ($scope.cart.length > 0) {
            $scope.orderPlaced = true;
            $scope.cart = [];
            localStorage.removeItem('cart');

            $timeout(function() {
                $scope.orderPlaced = false;
            }, 5000);
        } else {
            alert("Your cart is empty!");
        }
    };
}]);

