app.factory('productFactory', ["$http", function($http){

  var factory = {};

  factory.index = function(callback){
    $http.get('/products/get')
    .then(function(returnProducts){
      callback(returnProducts.data);
    })
  }
  factory.add = function(product, callback){
    console.log('Product factory hit');
    $http.post('/addProduct', product)
    .then(function(data){
      callback(data);
    });
  }
  factory.updateQty = function(updateProduct, callback){
    $http.put('/updateProduct/' + updateProduct._id, updateProduct)
    .then(function(response){
      callback(response);
    })
  }


  return factory;
}]);
