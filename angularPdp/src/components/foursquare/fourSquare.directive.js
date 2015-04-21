(function(){
    angular.module('FourSquareApp')
        .controller("StartCtrl",function StartCtrl($scope,$window, foursquareApiService){
            $scope.nearby = 'Харьков';
            $scope.query  = 'магазин';

            $scope.search = function(){
                $scope.places = foursquareApiService.places({
                    near  : $scope.nearby,
                    query : $scope.query
                });
            };

            $scope.windowOpen = function(url){
                 $window.open(url,"","width=400,height=400");
            }
        })
        .directive('foursquare', function(){
            return{
                restrict     :'AECM',
                replace      : true,
                templateUrl  :'../src/components/foursquare/fourSquare.tmpl.html',
                controller   :'StartCtrl',
                controllerAs :'start'
            }
        })
})();
