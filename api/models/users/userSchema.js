const mongoDB = require('mongoose');

const userSchema = mongoDB.Schema({

  firstName:       { type: String, required: true },
  lastName:        { type: String, required: true },
  email:           { type: String, required: true, unique: true },
  passwordHash:    { type: String, required: true },

  created: { type: Date, defaut: Date.now },
  modified: { type: Date, defaut: Date.now }

})

module.exports = mongoDB.model('User', userSchema)