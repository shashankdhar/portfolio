import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';

// Lenis smooth scrolling and Framer Motion remain installed but are intentionally
// unused in v1. See src/_legacy/ for the previous implementation.

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
