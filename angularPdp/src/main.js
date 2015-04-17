(function(){

    angular.module('FourSquareApp', ['ui.router', 'ngResource'])
        .config(function config($stateProvider){
            $stateProvider.state('index',{
                url:'',
                controller:'startAppCtrl',
                templateUrl:'./ui-route/startApp/startApp.tmpl.html'
            });

            $stateProvider.state('date',{
                url:'/date',
                controller:'DateCtrl',
                templateUrl:'./ui-route/date/date.tmpl.html'
            });
        })

        .constant('appConfig', {
            api: {
                baseURL: 'https://api.foursquare.com/v2',
                clientId: 'NPEJ4W0IW5RCPHXKNTKR0HHTVGPZYXMDNWV44INSNLUXE4W1',
                clientSecret: 'SA3U5ITWR45QZML05FTDCJNZEOLQFAL1UXKPGFSPLZJPW52N',
                version: '20130815'
            }
        })

        .service('foursquareApiService', function ($resource, appConfig) {
            var url = appConfig.api.baseURL + '/venues/search';
            return $resource(url, {
                    client_id: appConfig.api.clientId,
                    client_secret: appConfig.api.clientSecret,
                    v: appConfig.api.version,
                    callback: 'JSON_CALLBACK'
                },
                {
                    places: {
                        method: 'JSONP',
                        isArray: true,
                        transformResponse: function (data) {
                            console.log(data);
                            return data.response.venues;
                        }
                    }
                });
        })

        .filter('sort', function(){
            return function(text){
                console.log(text);
                return text;
            }
        })
})();




