const express = require('express');
const router = express.Router();
const Ticket = require('../models/Ticket');
const User = require('../models/User');
const data = require('../../data.json');

// Get all tickets
router.get('/tickets', (req, res) => {
  res.json(data.tickets);
});

// Get all users
router.get('/users', (req, res) => {
  res.json(data.users);
});

// Get ticket by ID
router.get('/tickets/:id', (req, res) => {
  const { id } = req.params;
  const ticket = data.tickets.find((ticket) => ticket.id === id);

  if (ticket) {
    res.json(ticket);
  } else {
    res.status(404).json({ message: 'Ticket not found' });
  }
});

// Create a new ticket
router.post('/tickets', (req, res) => {
  const newTicket = req.body;
  data.tickets.push(newTicket);
  res.status(201).json(newTicket);
});

// Update ticket by ID
router.put('/tickets/:id', (req, res) => {
  const { id } = req.params;
  const updatedTicket = req.body;
  const index = data.tickets.findIndex((ticket) => ticket.id === id);

  if (index !== -1) {
    data.tickets[index] = updatedTicket;
    res.json(updatedTicket);
  } else {
    res.status(404).json({ message: 'Ticket not found' });
  }
});

// Delete ticket by ID
router.delete('/tickets/:id', (req, res) => {
  const { id } = req.params;
  const index = data.tickets.findIndex((ticket) => ticket.id === id);

  if (index !== -1) {
    const deletedTicket = data.tickets.splice(index, 1)[0];
    res.json(deletedTicket);
  } else {
    res.status(404).json({ message: 'Ticket not found' });
  }
});

module.exports = router;

