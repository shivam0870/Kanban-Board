const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Define user schema fields
  name: String,
  available: Boolean,
});

module.exports = mongoose.model('User', userSchema);
