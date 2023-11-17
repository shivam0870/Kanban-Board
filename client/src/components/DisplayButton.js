import React from 'react';

const DisplayButton = ({ setGroupingOption }) => {
  const handleDisplay = (option) => {
   
    setGroupingOption(option);
  };

  return (
    <div>
      <button onClick={() => handleDisplay('status')}>Display by Status</button>
      <button onClick={() => handleDisplay('user')}>Display by User</button>
      <button onClick={() => handleDisplay('priority')}>Display by Priority</button>
    </div>
  );
};

export default DisplayButton;
