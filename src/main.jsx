// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; 
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; // Import AuthProvider

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <AuthProvider> {/* Ensure AuthProvider wraps the App */}
          <App />
        </AuthProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}