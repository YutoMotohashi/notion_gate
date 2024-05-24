import React, { useState } from 'react';

function AddEntryToDatabase({ databaseId }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addEntry = async () => {
    try {
      console.log('Sending data to serverless function:', { databaseId, title, description });
      console.log('Sending data to serverless function:', { databaseId, title, description });
      const response = await fetch('/api/addPage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ databaseId, title, description }),
      });
      
      console.log('Response status:', response.status);  // Check the HTTP response code

      if (!response.ok) {
        throw new Error(`Server responded with an error: ${response.status}`);
      }

      const data = await response.json();
      console.log('Entry added successfully:', data);
      alert('New entry added successfully!');
    } catch (error) {
      console.error('Error adding entry:', error);
      alert(`Failed to add entry. ${error.message}`);
    }
  };

  return (
    <div>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter title" />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Enter description" />
      <button onClick={addEntry}>Add Entry</button>
    </div>
  );
}

export default AddEntryToDatabase;
