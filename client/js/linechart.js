'use strict';

angular.module('mainApp.controllers', ['nvd3'])
    .controller('lineChartCtrl', function($scope, $http){
      
        $scope.options = {
            chart: {
                type: 'discreteBarChart',
                height: 450,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 60,
                    left: 50
                },
                x: function(d){return d.x.name},
                y: function(d){return d.avgprice},
                showValues: true,
                valueFormat: function(d){
                    return d3.format(',.1f')(d);
                },
                transitionDuration: 500,
                xAxis: {
                    axisLabel: 'Product',
                    rotateLabels: 50,
                    showMaxMin: false
                },
                yAxis: {
                    axisLabel: 'Sales',
                    axisLabelDistance: 35,
                    tickFormat: function(d){
                        return d3.format(',.1f')(d);
                    }
                }
            }
        };
     
       var gsin =[];
       $http.get("/chartdata").success(function(response){
           gsin = response.dataSin;
           $scope.data = sinAndCos();
        });

               /*Random Data Generator */
        function sinAndCos() {            
            //Line chart data should be sent as an array of series objects.
            return [
                {
                    values: gsin,      //values - represents the array of {x,y} data points
                    key: 'Product vs Sales', //key  - the name of the series.
                    color: '#ff7f0e',  //color - optional: choose your own line color.
                    bar: true
                }
            ];
        };
    })