




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

