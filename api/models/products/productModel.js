const mongoDB = require('mongoose');
const Product = require('./productSchema');

exports.getProducts = (req, res) => {
  Product.find()
    .then(data => res.status(200).json(data))
    .catch(err => res.status(500).json(err))
}

exports.getProduct = (req, res) => {
  
  //   .then(product => res.status(200).json(product))
  //   .catch(err => res.status(500).json(err))

  Product.exists( { _id: req.params.id }, (err, result) => {
    if(err) {
      return res.status(400).json(err)
    } else {

      if(result) {
        Product.findById(req.params.id)
        return res.status(200).json(product)
      } else {
        return res.status(404).json({
          statusCode: 400,
        status: false,
        message: 'Product does not exist'
        })
      }

    }
    
  })
}


exports.createProduct = (req, res) => {
  Product.exists({ name: req.body.name }, (err, result) => {
    if(err){
      return res.status(500).json(err)
    } else {
      if(result) res.status(400).json({
        statusCode: 400,
        status: false,
        message: 'Name already in use'

      })
    }

    const newProduct = new Product({
      name:   req.body.name,
      short:  req.body.short,
      desc:   req.body.desc, 
      price:  req.body.price,
      image:  req.body.image

    })
    newProduct.save()
    .then(() => {
      res.status(201).json({
        statusCode: 201, 
        status: true,
        message: 'Product successfully created'
      })
    })
    .catch(() => {
      res.status(500).json({
        statusCode: 500,
        status: false,
        message: 'Failed to create product'
      })
    })


  })
}

exports.updateProduct = (req, res) => {
  
  Product.exists({ _id: req.params.id }, (err, result) => {
    if(err) {
      return res.status(400).json(err)
    } else {

      if(result) {
        
        Product.updateOne({ _id: req.params.id }, {
          ...req.body,
          modified: Date.now()
        })
        .then (() => {
          res.status(200).json({
            statusCode:200,
            status: true,
            message: 'Product Updated'
          })
        })
        .catch(() => {
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Product failed to update'
        })
      })

      } else {
        return res.status(404).json({
          statusCode: 400,
        status: false,
        message: 'Product does not exist'
        })
      }

    }
  })

}

exports.deleteProduct = (req, res) => {
 Product.exists( { _id: req.params.id }, (err, result) =>{

  if(err) {
    return res.status(500).json(err)
  }   else  {
    if(result){
      Product.deleteOne( {_id: req.params.id} )
      .then(() => {
        res.status(200).json({
          statusCode: 200,
          status: true,
          message: 'Product was successfully deleted'
        })
      })
      .catch(() => {
        res.status(500).json({
          statusCode: 500,
          status: false, 
          message: 'Could not delete product'
        })
      })
    }  
    else {
      return res.status(404).json({
        statusCode: 404, 
        status: false, 
        message: 'This product does not exist'
      })
    }
  }
 })
}