var path = require('path');
var customer = require('./../controllers/customerController.js');
var product = require('./../controllers/productController.js');
var order = require('./../controllers/orderController.js');

module.exports = function(app){
  app.post('/addCustomer', customer.add);
  app.get('/customers/get', customer.getAll);
  app.delete('/customers/:id', customer.delete);
  app.get('/products/get', product.getAll);
  app.post('/addProduct', product.add);
  app.put('/updateProduct/:id', product.updateQty);
  app.post('/orders/new', order.add);
  app.get('/orders/get', order.getAll);
}
