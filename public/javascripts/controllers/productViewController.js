/**
 * Created by NehaP on 6/3/2017.
 */

'use strict';

angular.module('myApp')
    .controller('ProductViewController',['$scope', '$http', 'MainService', function ($scope, $http, MainService) {
/*
        MainService.get()
            .success(function (product) {
                $scope.products = product;
            })
            .error(function(product) {
                console.log('Error: ' + product);
            });*/


        $http.get('/products').success(function (data) {
            $scope.products = product;
        });

    }]);
