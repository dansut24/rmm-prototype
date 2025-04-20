import React, { useState } from 'react';
import './App.css';

function App() {
  const [active, setActive] = useState('home');

  const renderSection = () => {
    switch (active) {
      case 'devices':
        return <div><h2>Device Management</h2><p>View all registered endpoints, their OS, status, and security posture.</p></div>;
      case 'patching':
        return <div><h2>Patch Management</h2><p>Scan for missing patches, apply OS and 3rd-party software updates remotely.</p></div>;
      case 'remote':
        return <div><h2>Remote Access</h2><p>Launch terminal sessions, remote desktop or file manager from your browser using secure tunneling.</p></div>;
      case 'security':
        return <div><h2>Security Integrations</h2><p>Monitor threat alerts and antivirus health via SentinelOne or Bitdefender APIs.</p></div>;
      case 'contact':
        return <div><h2>Contact Us</h2><p>Email: support@veytrax.com<br/>Phone: +44 1234 567890</p></div>;
      default:
        return <div><h2>Welcome to Veytrax RMM</h2><p>Your all-in-one ITSM + Remote Management platform.</p></div>;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Veytrax</h1>
        <nav>
          <a onClick={() => setActive('home')}>Home</a>
          <a onClick={() => setActive('devices')}>Devices</a>
          <a onClick={() => setActive('patching')}>Patching</a>
          <a onClick={() => setActive('remote')}>Remote Access</a>
          <a onClick={() => setActive('security')}>Security</a>
          <a onClick={() => setActive('contact')}>Contact</a>
        </nav>
      </header>
      <main>
        {renderSection()}
      </main>
      <footer>&copy; 2025 Veytrax. All rights reserved.</footer>
    </div>
  );
}

export default App;
