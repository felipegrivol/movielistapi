var jwt = require('jsonwebtoken');

var config = require('../util/config.js');

module.exports = {

  errorMessage: function(res, message) {
    res.status(500).json({ 'error': message });
    return res;
  },

  validateToken: function(req, res, next) {
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
      jwt.verify(token, config.secret, function(err, decoded) {      
          if (err) {
              return res.status(401).send({ success: false, message: 'Failed to authenticate token.' });    
          } else {
              req.decoded = decoded;    
              next();
          }
      });
  } else {
      return res.status(403).send({ 
          success: false, 
          message: 'No token provided.' 
      });
  }
}

}