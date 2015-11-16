/**
* Created by mgarcia on 11/6/2015.
*/
(function(app){
        app.controller('mainController', function($scope, service1){

            var thisPatient = {
                    "_id": "1", "last_name": "Test"
                    , "first_name": "Father"
                    , "age": "35"
                };

            $scope.patient = thisPatient;

            $scope.showSomething = function(){
                console.log('this is from the main controller');
            }

            $scope.savePatient = service1.submitData;


        });
    }
)(angular.module('1nodeinstall'));

//javascript IFFE