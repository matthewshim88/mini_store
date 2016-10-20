app.controller('orderController', function($scope, orderFactory, productFactory, customerFactory){

  $scope.orders = [];
  $scope.customers = [];
  $scope.products = [];

  customerFactory.index(function(returnedCustomers){
    $scope.customers = returnedCustomers;
    // console.log($scope.customers);
  });

  productFactory.index(function(returnedProduct){
    $scope.products = returnedProduct;
    // console.log($scope.products);
  });

  orderFactory.index(function(returnOrders){
    $scope.orders = returnOrders;
  })

  $scope.add = function(){
    var order = {
      _product: $scope.product._id,
      _customer: $scope.customer,
      qty: $scope.product.qty,
    }
    //product is passed through via select ng-change in orders.html

    orderFactory.add(order, function(returnedOrder){
      productFactory.updateQty($scope.product, function(qtyUpdate){
        console.log(returnedOrder.qty + " subtracted from Qty");
        //need to call orderfactory index because customer name/productname
        //are handled by different controllers, the order object only has ID's
        orderFactory.index(function(returnOrders){
          $scope.orders = returnOrders;
        })
        $scope.customer = "";
        $scope.product="";
        $scope.product.qty="";
      })
    })

  }

  $scope.prodQty = function(product){
    // console.log(product);
    $scope.quantity = product.qty
  }

})
