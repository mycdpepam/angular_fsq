(function(){

    angular.module('FourSquareApp')
        .controller('CurrentCtrl', function($scope, $interval){
            $scope.currentTime = new Date();
            $interval(function(){
                $scope.currentTime = new Date();
            },1000);
        })

        .directive('current', function(){
            return{
               restrict     : 'AECM',
               templateUrl  : '../src/components/currentdate/currentDate.tmpl.html',
               replace      : true,
               controller   : 'CurrentCtrl',
               controllerAs : 'current',
               link         : function(scope, element){
                   element.on('mouseenter', function(){

                   })
               }
            }
        })
})();