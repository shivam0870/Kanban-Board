import React from 'react';

const Ticket = ({ ticket, users }) => {
 
  return (
    <div className="ticket">
      <h3>{ticket.title}</h3>
    
      <p>Status: {ticket.status}</p>
      <p>User: {getUserById(users, ticket.userId)?.name}</p>
      <p>Priority: {getPriorityLabel(ticket.priority)}</p>
    </div>
  );
};

const getUserById = (users, userId) => {
  return users.find((user) => user.id === userId);
};

const getPriorityLabel = (priority) => {
 
  switch (priority) {
    case 4:
      return 'Urgent';
    case 3:
      return 'High';
    case 2:
      return 'Medium';
    case 1:
      return 'Low';
    case 0:
      return 'No priority';
    default:
      return 'Unknown';
  }
};

export default Ticket;
