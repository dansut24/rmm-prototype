import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Devices from './pages/Devices';
import './App.css';

function Home() {
  return (
    <div>
      <h2>Welcome to Veytrax RMM</h2>
      <p>Your all-in-one ITSM + Remote Management platform.</p>
    </div>
  );
}

function Patching() {
  return (
    <div>
      <h2>Patch Management</h2>
      <p>Scan for missing patches, apply OS and 3rd-party software updates remotely.</p>
    </div>
  );
}

function Remote() {
  return (
    <div>
      <h2>Remote Access</h2>
      <p>Launch terminal sessions, remote desktop or file manager from your browser using secure tunneling.</p>
    </div>
  );
}

function Security() {
  return (
    <div>
      <h2>Security Integrations</h2>
      <p>Monitor threat alerts and antivirus health via SentinelOne or Bitdefender APIs.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Email: support@veytrax.com<br/>Phone: +44 1234 567890</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Veytrax</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/devices">Devices</Link>
            <Link to="/patching">Patching</Link>
            <Link to="/remote">Remote Access</Link>
            <Link to="/security">Security</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/patching" element={<Patching />} />
            <Route path="/remote" element={<Remote />} />
            <Route path="/security" element={<Security />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>&copy; 2025 Veytrax. All rights reserved.</footer>
      </div>
    </Router>
  );
}

export default App;
