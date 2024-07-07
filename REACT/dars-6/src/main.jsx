import React from 'react';
import ReactDOM from 'react-dom/client'; // react-dom/client dan import qiling
import App from './App';
import './index.css'; // Agar sizda index.css fayli bo'lsa, import qiling

const rootElement = document.getElementById('root'); // Root elementni oling
const root = ReactDOM.createRoot(rootElement); // createRoot ni ishlating

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

