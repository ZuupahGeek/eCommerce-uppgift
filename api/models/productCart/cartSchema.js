const mongoDB = require('mongoose');

// const cartSchema = mongoDB.Schema({

//     quantity: {type: Number, required: false},
//     name: {type: String, required: false},
//     short: {type: String, required: false},
//     desc: {type: String, required: false},
//     price: {type: Number, required: false},
//     image: {type: String, require: false},
    

// });

const orderSchema = mongoDB.Schema({
  orderNumber: {type: Number, required: false},
  customerID: {type: Number, required: false},
  count: {type: Number, required: false},
  totalPrice: {type: Number, required: false},
  cart: []
})

// module.exports = mongoDB.model('Cart', cartSchema);
module.exports = mongoDB.model('Order', orderSchema);