import React from 'react';
import Ticket from './Ticket';

const Board = ({ tickets, users, groupingOption }) => {
 
  let groupedTickets;

  switch (groupingOption) {
    case 'status':
      groupedTickets = groupByStatus(tickets);
      break;
    case 'user':
      groupedTickets = groupByUser(tickets, users);
      break;
    case 'priority':
      groupedTickets = groupByPriority(tickets);
      break;
    default:
      groupedTickets = groupByStatus(tickets);
  }

  
  return (
    <div className="board">
      {Object.keys(groupedTickets).map((group) => (
        <div key={group} className="group">
          <h2>{group}</h2>
          {groupedTickets[group].map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket} users={users} />
          ))}
        </div>
      ))}
    </div>
  );
};

const groupByStatus = (tickets) => {

  const grouped = {};
  tickets.forEach((ticket) => {
    if (!grouped[ticket.status]) {
      grouped[ticket.status] = [];
    }
    grouped[ticket.status].push(ticket);
  });
  return grouped;
};

const groupByUser = (tickets, users) => {
 
  const grouped = {};
  tickets.forEach((ticket) => {
    const userName = getUserById(users, ticket.userId)?.name || 'Unassigned';
    if (!grouped[userName]) {
      grouped[userName] = [];
    }
    grouped[userName].push(ticket);
  });
  return grouped;
};

const groupByPriority = (tickets) => {

  const grouped = {};
  tickets.forEach((ticket) => {
    const priorityLabel = getPriorityLabel(ticket.priority);
    if (!grouped[priorityLabel]) {
      grouped[priorityLabel] = [];
    }
    grouped[priorityLabel].push(ticket);
  });
  return grouped;
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

export default Board;
