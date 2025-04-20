// src/pages/Devices.js
import React, { useEffect, useState } from 'react';
//import './Devices.css';

function Devices() {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/devices'); // update with your backend URL
        const data = await res.json();
        setDevices(data);
      } catch (err) {
        console.error('Error loading devices:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchDevices();
  }, []);

  return (
    <div className="devices-page">
      <h2>Device Management</h2>
      {loading ? (
        <p>Loading devices...</p>
      ) : (
        <table className="device-table">
          <thead>
            <tr>
              <th>Hostname</th>
              <th>OS</th>
              <th>Status</th>
              <th>Last Seen</th>
            </tr>
          </thead>
          <tbody>
            {devices.map((device) => (
              <tr key={device.device_id}>
                <td>{device.hostname}</td>
                <td>{device.os || 'Unknown'}</td>
                <td>{device.status}</td>
                <td>{new Date(device.last_seen).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Devices;
