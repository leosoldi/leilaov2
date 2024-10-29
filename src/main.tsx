import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  AuthProvider  from './components/contexts/AuthContext'
import { RouterProvider } from 'react-router-dom';
import { router } from './App'
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
