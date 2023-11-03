import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cbatch = () => {
  const [text, setText] = useState('');
  const [responseData, setResponseData] = useState('');
  const [message, setMessage] = useState('');
  <h1>Create&nbsp;Batch</h1>
  const handleSubmit = async () => {
    try {
      const jsonData = JSON.parse(text);
      const response = await axios.post('http://localhost:3000/createBatch', jsonData);
      setResponseData(response.data.message);
      setMessage('Batch created successfully.');
    } catch (error) {
      console.error('Invalid JSON data:', error);
      setResponseData('Batch creation failed.');
      setMessage('Batch creation failed.');
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <div style={{ marginTop: '150px', marginRight: '200px' }}>
          <div>
            <input
              padding='10px'
              type="text"
              id="status"
              name="status"
              style={{ height: '600', width: '400px', padding: '80px', marginTop: '150px' }}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
      </div>
      <button
        onClick={handleSubmit}
        style={{
          marginTop: '100px',
          marginLeft: '250px',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '5px',
          backgroundColor: 'navy',
          color: 'white',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}
      >
        Submit
      </button>
      {message && <div style={{ color: 'green', marginTop: '10px' }}>{message}</div>}
      <h1 style={{ color: 'black' }}>{responseData}</h1>
    </div>
  );
};

export default Cbatch;
