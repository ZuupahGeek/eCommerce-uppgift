const router = require('express').Router();
const cartModel = require('../models/productCart/cartModel');

router.get('/', cartModel.getCarts);
router.get('/:id', cartModel.getCart);

router.post('/new', cartModel.createOrder)

module.exports = router