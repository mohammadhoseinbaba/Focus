import { StrictMode } from 'react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App'; // Import from App.tsx (no need for .js if TypeScript is used)

const rootElement = document.getElementById('root');

// Ensure `rootElement` is not null
if (!rootElement) {
  throw new Error("Root element not found! Make sure 'root' exists in your HTML.");
}

// Use `createRoot` safely
createRoot(rootElement as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
