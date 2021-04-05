const MongoDB = require('mongoose');
const Cart = require('./cartSchema');
const Order = require('./cartSchema');

exports.getCarts = (req, res) => {
  Cart.find()
  .then(data => res.status(200).json(data))
  .catch(err => res.status(500).json(err))
}


exports.getCart = (req, res) => {

  Cart.exists( {_id: req.params.id}, (err, result) => {
    if (err) {
      return res.status(400).json(err)
    } else {

      if(result) {
        Cart.findById(req.params.id)
        .then(cart => res.status(200).json(cart))
        .catch(err => res.status(500).json(err))
      } else {
        return res.status(404).json({
          statusCode: 400,
          status: false,
          message: 'Cart does not exist'
        })
      }
    }
  })
}

exports.createOrder = (req, res) => {
  
  Order.exists({_id: req.params.id}, (err, result) => {
    if (err) {
      return res.status(500).json(err)
    } else {

      if(result) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: 'Cart already exists'
        })
     }

      const newOrder = new Order ({
        customerID:    req.body.customerID,
        totalPrice:    req.body.totalPrice,
        cart:          req.body.cart
      })
      newOrder.save()
      .then(() => {
        res.status(201).json({
          statusCode: 201, 
          status: true,
          message: 'Cart successfully created'
        })
      })
      .catch(() => {
        res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Failed to create cart'
        })
      })
    


    }
  })
}
