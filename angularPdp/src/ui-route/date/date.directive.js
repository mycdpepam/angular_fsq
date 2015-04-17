(function(){
    angular.module('FourSquareApp')
        .controller('DateCtrl', function(){
              console.log('aa');
        })
        .directive('date', function(){
            return {
                restrict   :'AECM',
                controller :'DateCtrl'
            }
        })
})()