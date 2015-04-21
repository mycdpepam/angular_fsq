(function(){
    angular.module('FourSquareApp')
        .controller('DateCtrl', function(){

        })
        .directive('date', function(){
            return {
                restrict   :'AECM',
                controller :'DateCtrl'
            }
        })
})()