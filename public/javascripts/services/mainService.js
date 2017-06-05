/**
 * Created by NehaP on 6/3/2017.
 */


'use strict';

angular.module('myApp')

    .constant("baseURL","localhost:3000/")
    .service('MainService', ['$http', 'baseURL', function($http, baseURL) {
        return {
            get : function () {
                return $http.get(baseURL+'/products/');
            }
        }

    }]);
