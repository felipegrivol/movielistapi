var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
  title: String,
  synopsis: String,
  releaseYear: Number
});

module.exports = mongoose.model('Movie', MovieSchema);
