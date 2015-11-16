/**
 * Created by mgarcia on 11/13/2015.
 */

(function(app){

        app.factory('service1', function($http){

            var submitData = function(data){
                $http({
                    method: "post",
                    url: "/savePatient",
                    data: data
                }).then(function successCallBack(response){
                    console.log("Successfully saved patient.")
                }, function errorCallBAck(response){
                    console.log("Failed to save patient.")
                })
            };

            //console.log('service 1 is being called');

            return {
                    submitData: submitData
            }
        })

    }
)(angular.module('1nodeinstall'));