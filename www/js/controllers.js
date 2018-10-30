angular.module('app.controllers', [])

.controller('stockPricesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {

}])

.controller('resultCtrl', ['$scope', '$stateParams', '$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {

    appid="IDP3RBZRHQ841CL6";
    stock=$stateParams.stock;
    url = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + stock + "&apikey=" + appid;

    $http.get(url).then(function(response){
      $scope.stockName = response.data["Global Quote"]["01. symbol"];
      $scope.currentPrice = response.data["Global Quote"]["05. price"];
      $scope.date = response.data["Global Quote"]["07. latest trading day"];
      $scope.difference = response.data["Global Quote"]["08. previous close"];
      $scope.trend = response.data["Global Quote"]["09. change"];
      if(parseFloat($scope.trend)<0){
        $scope.recomend="Sell!";
        $scope.color="#ff0000"
      }else{
        $scope.recomend="Keep!";
        $scope.color="#000000"
      }
      var result;

      resutl=currentPrice-difference;

      if(result>0){

      }else {

      }

        }, function(error){
            //There was an error fetching from the server
            alert("Unable to retrieve weather");
        });

}])
