var mongoose = require('mongoose');

var LoginSchema = new mongoose.Schema({
  user: String,
  password: String
});

module.exports = mongoose.model('Login', LoginSchema);
