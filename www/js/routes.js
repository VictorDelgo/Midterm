angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

      .state('stockPrices', {
    url: '/page1',
    templateUrl: 'templates/stockPrices.html',
    controller: 'stockPricesCtrl'
  })

  .state('result', {
    url: '/page2',
    params:{
      stock: null
    },
    templateUrl: 'templates/result.html',
    controller: 'resultCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});
