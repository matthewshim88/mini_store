app.controller('productController', ['$scope', '$routeParams', '$location', 'productFactory', function($scope, $routeParams, $location, productFactory){

$scope.products = [];

productFactory.index(function(returnedProduct){
  $scope.products = returnedProduct;
});

$scope.add = function(){
  console.log($scope.product);
  productFactory.add($scope.product, function(product){
    console.log("Successfully Added: " );
    $scope.products.push(product.data);

    //must call products to immediately render the page
    productFactory.index(function(returnedProduct){
      $scope.products = returnedProduct;
    });
    //clears field
    $scope.product = "";
  });
}


}])
