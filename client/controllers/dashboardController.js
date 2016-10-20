app.controller('dashboardController', function($scope, orderFactory, productFactory, customerFactory){

  $scope.toEpoch = function(date){
    var orderDate = Math.floor(new Date(date).getTime()/1000);
    return orderDate;
  }


})
