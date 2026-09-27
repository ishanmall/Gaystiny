import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

/* Import CSS files in this exact order */
import './index.css'; // Loads the global resets and Orbitron font first
import './App.css';   // Loads your custom 3D UI and animations second

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);