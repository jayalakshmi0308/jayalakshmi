



var app = angular.module('app');

app.controller('registerCtrl', ['$scope', '$http', '$window', '$location', function($scope, $http, $window, $location) {
    $scope.name = '';
    $scope.email = '';
    $scope.pass = '';

    $scope.getFormData = function() {
        var userObj = {
            name: $scope.name,
            email: $scope.email,
            pass: $scope.pass
        };

        $http.post('http://localhost:3001/api/users', userObj)
        .then(function(response) {
            $window.alert("Registration successful!");
            $location.path('/signin');
        }, function(error) {
            $window.alert("Error during registration. Please try again.");
        });
    };
}]);

