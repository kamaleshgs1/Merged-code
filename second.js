import React, { useState, useEffect } from 'react';
 
const certificateDashboardStyle = {};
 
const dashboardContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center', // Center the box horizontally
  maxWidth: '2000px',
};
 
const textareaStyle = {
  justifySelf: 'center',
  marginTop: '100px',
  width: '300px', // Adjusted width for centering
  height: '80px', // Reduced initial height
  padding: '120px',
  marginRight: '200px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '14px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  overflowX: 'auto',
};
 
const CertificateDashboard = () => {
  const [certificate, setCertificate] = useState('');
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/getCaCertificate');
        const data = await response.text();
        setCertificate(data);
      } catch (error) {
        console.error('Error fetching certificate:', error);
      }
    };
 
    fetchData();
  }, []); // Empty dependency array means this effect will run once when the component mounts
 
  return (
    <div style={{ ...certificateDashboardStyle }}>
     
      <div style={dashboardContainerStyle}>
        <textarea
          value={certificate}
          readOnly
          style={textareaStyle}
          placeholder="CA certificate"
        />
      </div>
    </div>
  );
};
 
export default function Second() {
  return <CertificateDashboard />;
}
 
