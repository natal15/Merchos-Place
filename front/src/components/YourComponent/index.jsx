import React from 'react';
import axios from 'axios';
import { useMutation } from 'react-query';

const YourComponent = () => {
  
  const apiUrl = 'http://localhost:4000/dogs/Rollo';

  // useMutation returns a mutation function and status/error data
  const updateResourceMutation = useMutation(updatedData => axios.put(apiUrl, updatedData));

  const handleUpdateClick = () => {
    const dataToUpdate = {
      key1: 'new value 1',
      key2: 'new value 2',
      
    };

    // Call the mutation function to perform the PUT request
    updateResourceMutation.mutate(dataToUpdate);
  };

  return (
    <div>
      {/* Your component content */}
      <button onClick={handleUpdateClick}>Update Resource</button>
    </div>
  );
};

export default YourComponent;
