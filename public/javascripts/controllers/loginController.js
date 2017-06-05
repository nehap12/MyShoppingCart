/**
 * Created by NehaP on 6/4/2017.
 */


'use strict';

angular.module('myApp')
    .controller('LoginController',['$scope', '$http','$location', 'MainService', function ($scope, $http, $location, MainService) {

        $scope.submit = function () {
           $http.post()
        };

        $scope.register = function () {
            $location.path('/register');
        }

    }]);