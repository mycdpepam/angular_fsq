(function(){
    angular.module('FourSquareApp')
        .controller('exampleCtrl', function(){

        })
        .directive('example', function(){
            console.log('')
            var link = function(){

            };
            return{
                restrict    : 'AECM',
                controller  : 'exampleCtrl',
                templateUrl : '../src/components/example/example.tmpl.html',
                link: link
            }
        })
})();