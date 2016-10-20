var app = angular.module("app", ["ngRoute", "angular-humanize"]);

app.config(function($routeProvider){
  $routeProvider
  .when("/", {
    templateUrl: "/partials/dashboard.html",
    controller: "dashboardController"
  })
  .when("/products", {
    templateUrl: "/partials/products.html",
    controller: "productController"
  })
  .when("/orders", {
    templateUrl: "/partials/orders.html",
    controller: "orderController"
  })
  .when("/customers", {
    templateUrl: "/partials/customers.html",
    controller: "customerController"
  })
  .when("/customers/:id/delete", {
    templateUrl: "/partials/deleteCustomer.html",
    controller: "customerController"
  })
  .when("/settings", {
    templateUrl: "/partials/settings.html",
    controller: "dashboardController"
  })
  .otherwise({
    redirectTo: '/'
  })

})

.filter('range', function(){
  return function(n){
    var res = [];
    for(var i = 1; i < n; i++){
      res.push(i);
    }
    return res;
  };
});
