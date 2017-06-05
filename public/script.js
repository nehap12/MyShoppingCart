/**
 * Created by NehaP on 6/3/2017.
 */

'use strict';

var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl : './views/login.html',
            controller: 'LoginController'
        })
        .when('/register', {
            templateUrl : './views/register.html',
            controller : 'RegisterController'
        })
        .when('/products', {
            templateUrl : './views/productsDashboard.html',
            controller : 'ProductViewController'
        })
});
