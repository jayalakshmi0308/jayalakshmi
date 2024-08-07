

app.controller('signinCtrl', ['$scope', '$http', '$window', '$location', function($scope, $http, $window, $location) {
    $scope.email = '';
    $scope.pass = '';

    $scope.getFormData = function() {
        $http.get('http://localhost:3001/api/signin', { params: { email: $scope.email, pass: $scope.pass } })
        .then(function(response) {
            var users = response.data.users;
            
            if (users.length > 0) {
                $window.alert("Sign-in successful!");
                $location.path('/menu');
            } else {
                $window.alert("Invalid email or password.");
            }
        }, function(error) {
            $window.alert("Error during sign-in. Please try again.");
        });
    };
}]);
