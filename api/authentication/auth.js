const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = ';>Vur!;B{S52&xEJ*h2Bs&tj$4a'

exports.generateToken = (user) => {
  return jwt.sign({ id: user._id }, secretKey, { expiresIn: '1h' })
}

exports.verifyToken = (req, res, next) => {
  try {
    // Token blir skickad som: Bearer <token> därför splittar vi för att bara få Token-delen
    const token = req.headers.authorization.split(" ")[1]
    req.userData = jwt.verify(token, secretKey)
    next();
  }
  catch {
    return res.status(401).json({
      statusCode: 401,
      status: false,
      message: 'Access Restricted! Please Login'
    })
  }
}