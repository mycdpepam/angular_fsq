(function(){

    angular.module('FourSquareApp')
        .controller('CurrentCtrl', function($scope, $interval){
            $interval(function(){
                $scope.currentTime = new Date();
            },1000);
        })

        .directive('current', function(){
            return{
               restrict     : 'AECM',
               templateUrl  : '../src/components/currentdate/currentDate.tmpl.html',
               controller   : 'CurrentCtrl',
               controllerAs : 'current',
               link         : function(scope, element){
                   element.on('mouseenter', function(){
                      console.log('current date')
                   })
               }
            }
        })
})();