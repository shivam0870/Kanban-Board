import React, { useState, useEffect } from 'react';
import DisplayButton from './DisplayButton';
import Board from './Board';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        
        const ticketsResponse = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment/tickets');
        const ticketsData = await ticketsResponse.json();
        setTickets(ticketsData);

        const usersResponse = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment/users');
        const usersData = await usersResponse.json();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 
  }, []); 

  return (
    <div>
      <h1>Kanban Board</h1>
      <DisplayButton setGroupingOption={setGroupingOption} />
      <Board tickets={tickets} users={users} groupingOption={groupingOption} />
    </div>
  );
};

export default App;
