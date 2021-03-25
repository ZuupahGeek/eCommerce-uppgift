const mongoDB = require('mongoose');

const productSchema = mongoDB.Schema({

  name: { type: String, required: true, unique: true },
  short: {type: String, required: true},
  desc: {type: String, required: true},
  price: {type: Number, required: true},
  image: {type: String, require: true},

  created: {type: Date, default: Date.now},
  modified: {type: Date, default: Date.now}

})

module.exports = mongoDB.model('Product', productSchema)