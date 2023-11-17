const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  
  title: String,
  tag: [String],
  userId: String,
  status: String,
  priority: Number,
});

module.exports = mongoose.model('Ticket', ticketSchema);
